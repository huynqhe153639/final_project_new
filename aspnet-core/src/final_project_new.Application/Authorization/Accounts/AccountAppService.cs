using System.Net.Mail;
using System.Net;
using System;
using System.Threading.Tasks;
using Abp.Configuration;
using Abp.Zero.Configuration;
using final_project_new.Authorization.Accounts.Dto;
using final_project_new.Authorization.Users;

namespace final_project_new.Authorization.Accounts
{
    public class AccountAppService : final_project_newAppServiceBase, IAccountAppService
    {
        // from: http://regexlib.com/REDetails.aspx?regexp_id=1923
        public const string PasswordRegex = "(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$";

        private readonly UserRegistrationManager _userRegistrationManager;

        public AccountAppService(
            UserRegistrationManager userRegistrationManager)
        {
            _userRegistrationManager = userRegistrationManager;
        }

        public async Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input)
        {
            var tenant = await TenantManager.FindByTenancyNameAsync(input.TenancyName);
            if (tenant == null)
            {
                return new IsTenantAvailableOutput(TenantAvailabilityState.NotFound);
            }

            if (!tenant.IsActive)
            {
                return new IsTenantAvailableOutput(TenantAvailabilityState.InActive);
            }

            return new IsTenantAvailableOutput(TenantAvailabilityState.Available, tenant.Id);
        }

        public async Task<RegisterOutput> Register(RegisterInput input)
        {
            var user = await _userRegistrationManager.RegisterAsync(
                input.Name,
                input.Surname,
                input.EmailAddress,
                input.UserName,
                input.Password,
                true // Assumed email address is always confirmed. Change this if you want to implement email confirmation.
            );

            var isEmailConfirmationRequiredForLogin = await SettingManager.GetSettingValueAsync<bool>(AbpZeroSettingNames.UserManagement.IsEmailConfirmationRequiredForLogin);

            return new RegisterOutput
            {
                CanLogin = user.IsActive && (user.IsEmailConfirmed || !isEmailConfirmationRequiredForLogin)
            };
        }

        public Random r = new Random();
        public string Randfunc()
        {
            string MaXacNhan = "";
            for (int i = 1; i < 7; i++)
            {
                int n = r.Next(0, 9);
                MaXacNhan += n;
            }
            return MaXacNhan;

        }

        public string SendEmail(string email)
        {
            var from = "luu.tung.lam@gosei.com.vn";
            var pass = "lamdangcapvip";
            string code = Randfunc();
            //var user = await _userManager.FindByEmailAsync(email.Email);     
            //var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            MailMessage mailMessage = new MailMessage();
            mailMessage.To.Add(email);
            mailMessage.From = new MailAddress(from);
            mailMessage.Subject = "Change your password in hehe ";
            mailMessage.Body = "Here is your confirmation code: " + code;

            SmtpClient smtp = new SmtpClient("smtp.gmail.com");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential(from, pass);
            smtp.Send(mailMessage);
            return code;
        }
    }
}

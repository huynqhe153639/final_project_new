using System;
using System.Collections.Generic;
using Abp.Authorization.Users;
using Abp.Extensions;

namespace final_project_new.Authorization.Users
{
    public class User : AbpUser<User>
    {
        public const string DefaultPassword = "123qwe";

        public string Image { get; set; }

        public string Position { get; set; }

        public string Phone { get; set; }

        public bool isEarlyStart { get; set; }

        public bool isLateFinish { get; set; }

        public bool isAdditionalShift { get; set; }

        public List<string> prefferDays { get; set; }

        public DateTime? startTime { get; set; }

        public DateTime? endTime { get; set; }

        public static string CreateRandomPassword()
        {
            return Guid.NewGuid().ToString("N").Truncate(16);
        }

        public static User CreateTenantAdminUser(int tenantId, string emailAddress)
        {
            var user = new User
            {
                TenantId = tenantId,
                UserName = AdminUserName,
                Name = AdminUserName,
                Surname = AdminUserName,
                EmailAddress = emailAddress,
                Roles = new List<UserRole>()
            };

            user.SetNormalizedNames();

            return user;
        }
    }
}

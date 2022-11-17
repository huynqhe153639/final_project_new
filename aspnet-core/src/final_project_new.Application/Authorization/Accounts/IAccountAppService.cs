using System.Threading.Tasks;
using Abp.Application.Services;
using final_project_new.Authorization.Accounts.Dto;

namespace final_project_new.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}

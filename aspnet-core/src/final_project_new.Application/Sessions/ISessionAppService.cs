using System.Threading.Tasks;
using Abp.Application.Services;
using final_project_new.Sessions.Dto;

namespace final_project_new.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}

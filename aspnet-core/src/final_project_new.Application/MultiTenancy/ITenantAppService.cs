using Abp.Application.Services;
using final_project_new.MultiTenancy.Dto;

namespace final_project_new.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}


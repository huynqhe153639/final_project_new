using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using final_project_new.MultiTenancy;

namespace final_project_new.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}

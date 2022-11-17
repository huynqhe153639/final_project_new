using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using final_project_new.Authorization;

namespace final_project_new
{
    [DependsOn(
        typeof(final_project_newCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class final_project_newApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<final_project_newAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(final_project_newApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}

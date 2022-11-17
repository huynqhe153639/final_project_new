using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using final_project_new.EntityFrameworkCore;
using final_project_new.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace final_project_new.Web.Tests
{
    [DependsOn(
        typeof(final_project_newWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class final_project_newWebTestModule : AbpModule
    {
        public final_project_newWebTestModule(final_project_newEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(final_project_newWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(final_project_newWebMvcModule).Assembly);
        }
    }
}
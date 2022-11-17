using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using final_project_new.Configuration;

namespace final_project_new.Web.Host.Startup
{
    [DependsOn(
       typeof(final_project_newWebCoreModule))]
    public class final_project_newWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public final_project_newWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(final_project_newWebHostModule).GetAssembly());
        }
    }
}

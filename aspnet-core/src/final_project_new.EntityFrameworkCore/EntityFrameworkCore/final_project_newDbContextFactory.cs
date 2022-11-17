using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using final_project_new.Configuration;
using final_project_new.Web;

namespace final_project_new.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class final_project_newDbContextFactory : IDesignTimeDbContextFactory<final_project_newDbContext>
    {
        public final_project_newDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<final_project_newDbContext>();
            
            /*
             You can provide an environmentName parameter to the AppConfigurations.Get method. 
             In this case, AppConfigurations will try to read appsettings.{environmentName}.json.
             Use Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") method or from string[] args to get environment if necessary.
             https://docs.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli#args
             */
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            final_project_newDbContextConfigurer.Configure(builder, configuration.GetConnectionString(final_project_newConsts.ConnectionStringName));

            return new final_project_newDbContext(builder.Options);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using final_project_new.Authorization.Roles;
using final_project_new.Authorization.Users;
using final_project_new.MultiTenancy;

namespace final_project_new.EntityFrameworkCore
{
    public class final_project_newDbContext : AbpZeroDbContext<Tenant, Role, User, final_project_newDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public final_project_newDbContext(DbContextOptions<final_project_newDbContext> options)
            : base(options)
        {
        }
    }
}

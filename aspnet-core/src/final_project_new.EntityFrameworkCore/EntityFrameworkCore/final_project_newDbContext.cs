using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using final_project_new.Authorization.Roles;
using final_project_new.Authorization.Users;
using final_project_new.MultiTenancy;
using final_project_new.Notifications;
using final_project_new.RosterAndAvais;
using final_project_new.ShiftOffers;
using final_project_new.Leaves;

namespace final_project_new.EntityFrameworkCore
{
    public class final_project_newDbContext : AbpZeroDbContext<Tenant, Role, User, final_project_newDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public virtual DbSet<Leave> Leaves { get; set; }
        public virtual DbSet<RosterAndAvai> RosterAndAvais { get; set; }
        public virtual DbSet<ShiftOffer> ShiftOffers { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public final_project_newDbContext(DbContextOptions<final_project_newDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }

    }
}

using System;
using System.Transactions;
using Microsoft.EntityFrameworkCore;
using Abp.Dependency;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore.Uow;
using Abp.MultiTenancy;
using final_project_new.EntityFrameworkCore.Seed.Host;
using final_project_new.EntityFrameworkCore.Seed.Tenants;
using final_project_new.EntityFrameworkCore.Seed.ShiftOffers;
using final_project_new.EntityFrameworkCore.Seed.RosterAndAvais;
using final_project_new.EntityFrameworkCore.Seed.Leaves;

namespace final_project_new.EntityFrameworkCore.Seed
{
    public static class SeedHelper
    {
        public static void SeedHostDb(IIocResolver iocResolver)
        {
            WithDbContext<final_project_newDbContext>(iocResolver, SeedHostDb);
        }

        public static void SeedHostDb(final_project_newDbContext context)
        {
            context.SuppressAutoSetTenantId = true;

            // Host seed
            new InitialHostDbBuilder(context).Create();

            // Default tenant seed (in host database).
            new DefaultTenantBuilder(context).Create();
            new TenantRoleAndUserBuilder(context, 1).Create();
            new DefaultShiftOfferBuilder(context, 1).Create();
            new DefaultRosterAndAvaisBuilder(context, 1).Create();
            new DefaultLeavesBuilder(context, 1).Create();
            
        }

        private static void WithDbContext<TDbContext>(IIocResolver iocResolver, Action<TDbContext> contextAction)
            where TDbContext : DbContext
        {
            using (var uowManager = iocResolver.ResolveAsDisposable<IUnitOfWorkManager>())
            {
                using (var uow = uowManager.Object.Begin(TransactionScopeOption.Suppress))
                {
                    var context = uowManager.Object.Current.GetDbContext<TDbContext>(MultiTenancySides.Host);

                    contextAction(context);

                    uow.Complete();
                }
            }
        }
    }
}

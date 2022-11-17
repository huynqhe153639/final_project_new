using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace final_project_new.EntityFrameworkCore
{
    public static class final_project_newDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<final_project_newDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<final_project_newDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}

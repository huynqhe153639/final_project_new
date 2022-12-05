using final_project_new.Leaves;
using final_project_new.ShiftOffers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.EntityFrameworkCore.Seed.Leaves
{
    internal class DefaultLeavesBuilder
    {
        private readonly final_project_newDbContext _context;
        private readonly int _userId;

        public DefaultLeavesBuilder(final_project_newDbContext context, int userId)
        {
            _context = context;
            _userId = userId;
        }

        public void Create()
        {
            var leaves = new List<Leave>
            {
                new Leave(_userId,"Annual Leave", new DateTime(2022, 11, 28, 8, 0, 20), new DateTime(2022, 11, 30, 16, 0, 20), new DateTime(2022, 11, 28, 8, 10, 20),new DateTime(2022, 11, 30, 16, 10, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 11, 29, 6, 0, 20), new DateTime(2022, 11, 30, 12, 0, 20), new DateTime(2022, 11, 29, 6, 10, 20),new DateTime(2022, 11, 30, 12, 0, 20), "", false),
                new Leave(_userId,"Perental Leave", new DateTime(2022, 11, 29, 14, 0, 20), new DateTime(2022, 11, 29, 19, 0, 20), new DateTime(2022, 11, 29, 14, 10, 20), new DateTime(2022, 11, 29, 19, 0, 20), "", false),
                new Leave(_userId,"Annual Leave",new DateTime(2022, 11, 30, 8, 0, 20), new DateTime(2022, 12, 1, 16, 0, 20), new DateTime(2022, 11, 30, 8, 10, 20), new DateTime(2022, 12, 1, 16, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 2, 8, 0, 20), new DateTime(2022, 12, 4, 16, 0, 20), new DateTime(2022, 12, 2, 8, 10, 20) , new DateTime(2022, 12, 4, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 5, 8, 0, 20), new DateTime(2022, 12, 5, 16, 0, 20), new DateTime(2022, 12, 5, 8, 10, 20), new DateTime(2022, 12, 5, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 6, 6, 0, 20), new DateTime(2022, 12, 8, 12, 0, 20), new DateTime(2022, 12, 6, 6, 10, 20), new DateTime(2022, 12, 8, 12, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 6, 14, 0, 20), new DateTime(2022, 12, 9, 19, 0, 20), new DateTime(2022, 12, 6, 14, 10, 20), new DateTime(2022, 12, 9, 19, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 7, 6, 0, 20), new DateTime(2022, 12, 8, 12, 0, 20), new DateTime(2022, 12, 7, 6, 10, 20), new DateTime(2022, 12, 8, 12, 0, 20), "", false),
                new Leave(_userId,"Perental Leave", new DateTime(2022, 12, 7, 14, 0, 20), new DateTime(2022, 12, 10, 19, 0, 20), new DateTime(2022, 12, 7, 14, 10, 20), new DateTime(2022, 12, 10, 19, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 8, 8, 0, 20), new DateTime(2022, 12, 12, 16, 0, 20), new DateTime(2022, 12, 8, 8, 10, 20), new DateTime(2022, 12, 12, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 9, 8, 0, 20), new DateTime(2022, 12, 14, 16, 0, 20), new DateTime(2022, 12, 9, 8, 10, 20), new DateTime(2022, 12, 14, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 12, 8, 0, 20), new DateTime(2022, 12, 15, 16, 0, 20), new DateTime(2022, 12, 12, 8, 10, 20), new DateTime(2022, 12, 15, 16, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 13, 14, 0, 20), new DateTime(2022, 12, 15, 19, 0, 20), new DateTime(2022, 12, 13, 14, 10, 20), new DateTime(2022, 12, 15, 19, 0, 20), "", false),
                new Leave(_userId,"Perental Leave", new DateTime(2022, 12, 14, 8, 0, 20), new DateTime(2022, 12, 16, 16, 0, 20), new DateTime(2022, 12, 14, 8, 10, 20), new DateTime(2022, 12, 16, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 15, 8, 0, 20), new DateTime(2022, 12, 15, 16, 0, 20), new DateTime(2022, 12, 15, 8, 10, 20), new DateTime(2022, 12, 15, 16, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 19, 8, 0, 20), new DateTime(2022, 12, 22, 16, 0, 20), new DateTime(2022, 12, 19, 8, 10, 20), new DateTime(2022, 12, 22, 16, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 20, 8, 0, 20), new DateTime(2022, 12, 24, 16, 0, 20), new DateTime(2022, 12, 20, 8, 10, 20), new DateTime(2022, 12, 24, 16, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 21, 6, 0, 20), new DateTime(2022, 12, 25, 12, 0, 20), new DateTime(2022, 12, 21, 6, 10, 20), new DateTime(2022, 12, 25, 12, 0, 20), "", false),
                new Leave(_userId,"Perental Leave", new DateTime(2022, 12, 21, 14, 0, 20), new DateTime(2022, 12, 23, 19, 0, 20), new DateTime(2022, 12, 21, 14, 10, 20), new DateTime(2022, 12, 23, 19, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 22, 8, 0, 20), new DateTime(2022, 12, 28, 16, 0, 20), new DateTime(2022, 12, 22, 8, 10, 20), new DateTime(2022, 12, 28, 16, 0, 20), "", false),
                new Leave(_userId,"Sick Leave", new DateTime(2022, 12, 23, 6, 0, 20), new DateTime(2022, 12, 26, 12, 0, 20), new DateTime(2022, 12, 23, 6, 10, 20), new DateTime(2022, 12, 26, 12, 0, 20), "", false),
                new Leave(_userId,"Annual Leave", new DateTime(2022, 12, 23, 14, 0, 20), new DateTime(2022, 12, 24, 19, 0, 20), new DateTime(2022, 12, 23, 14, 10, 20), new DateTime(2022, 12, 24, 19, 0, 20), "", false),

            };

            foreach (var leave in leaves)
            {
                var existingLeave = _context.Leaves.IgnoreQueryFilters().FirstOrDefault(t => t.UserId == leave.UserId && DateTime.Compare(t.FromDate, leave.FromDate) == 0);

                if (existingLeave == null)
                {
                    _context.Leaves.Add(leave);
                }

            }
            _context.SaveChanges();
        }
    }
}


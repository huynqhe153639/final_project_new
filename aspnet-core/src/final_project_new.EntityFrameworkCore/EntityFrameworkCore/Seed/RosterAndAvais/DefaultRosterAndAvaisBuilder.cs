using Abp.Zero.EntityFrameworkCore;
using final_project_new.RosterAndAvais;
using final_project_new.ShiftOffers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.EntityFrameworkCore.Seed.RosterAndAvais
{
    internal class DefaultRosterAndAvaisBuilder
    {
        private readonly final_project_newDbContext _context;
        private readonly int _userId;

        public DefaultRosterAndAvaisBuilder(final_project_newDbContext context, int userId)
        {
            _context = context;
            _userId = userId;
        }

        public void Create()
        {
            var rosters = new List<RosterAndAvai>
            {
                new RosterAndAvai(_userId, new DateTime(2022, 11, 28, 8, 0, 20), new DateTime(2022, 11, 28, 16, 0, 20), new DateTime(2022, 11, 28, 8, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 11, 29, 6, 0, 20), new DateTime(2022, 11, 29, 12, 0, 20), new DateTime(2022, 11, 29, 6, 10, 20), "Annual Leave"),
                new RosterAndAvai(_userId, new DateTime(2022, 11, 29, 14, 0, 20), new DateTime(2022, 11, 29, 19, 0, 20), new DateTime(2022, 11, 29, 14, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 11, 30, 8, 0, 20), new DateTime(2022, 11, 30, 16, 0, 20), new DateTime(2022, 11, 30, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 2, 8, 0, 20), new DateTime(2022, 12, 2, 16, 0, 20), new DateTime(2022, 12, 2, 8, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 5, 8, 0, 20), new DateTime(2022, 12, 5, 16, 0, 20), new DateTime(2022, 12, 5, 8, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 6, 6, 0, 20), new DateTime(2022, 12, 6, 12, 0, 20), new DateTime(2022, 12, 6, 6, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 7, 6, 0, 20), new DateTime(2022, 12, 7, 12, 0, 20), new DateTime(2022, 12, 7, 6, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 8, 8, 0, 20), new DateTime(2022, 12, 8, 16, 0, 20), new DateTime(2022, 12, 8, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 9, 8, 0, 20), new DateTime(2022, 12, 9, 16, 0, 20), new DateTime(2022, 12, 9, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 12, 8, 0, 20), new DateTime(2022, 12, 12, 16, 0, 20), new DateTime(2022, 12, 12, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 13, 14, 0, 20), new DateTime(2022, 12, 13, 19, 0, 20), new DateTime(2022, 12, 13, 14, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 14, 8, 0, 20), new DateTime(2022, 12, 14, 16, 0, 20), new DateTime(2022, 12, 14, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 15, 8, 0, 20), new DateTime(2022, 12, 15, 16, 0, 20), new DateTime(2022, 12, 15, 8, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 19, 8, 0, 20), new DateTime(2022, 12, 19, 16, 0, 20), new DateTime(2022, 12, 19, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 20, 8, 0, 20), new DateTime(2022, 12, 20, 16, 0, 20), new DateTime(2022, 12, 20, 8, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 21, 6, 0, 20), new DateTime(2022, 12, 21, 12, 0, 20), new DateTime(2022, 12, 21, 6, 10, 20), "Sick Leave"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 21, 14, 0, 20), new DateTime(2022, 12, 21, 19, 0, 20), new DateTime(2022, 12, 21, 14, 10, 20), "Contracted"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 22, 8, 0, 20), new DateTime(2022, 12, 22, 16, 0, 20), new DateTime(2022, 12, 22, 8, 10, 20), "Additional Shift"),
                new RosterAndAvai(_userId, new DateTime(2022, 12, 23, 6, 0, 20), new DateTime(2022, 12, 23, 12, 0, 20), new DateTime(2022, 12, 23, 6, 10, 20), "Contracted"),


            };

            foreach (var roster in rosters)
            {
                var existingRoster = _context.RosterAndAvais.IgnoreQueryFilters().FirstOrDefault(t => t.UserId == roster.UserId && DateTime.Compare(t.Date, roster.Date) == 0);

                if (existingRoster == null)
                {
                    _context.RosterAndAvais.Add(roster);
                }

            }

            _context.SaveChanges();
        }
    }
}

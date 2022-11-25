using Abp.Zero.EntityFrameworkCore;
using final_project_new.RosterAndAvais;
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
            var employees = new List<RosterAndAvai>
            {
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                 new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                 new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),
                new RosterAndAvai(_userId,DateTime.Now,DateTime.Now,DateTime.Now,"Contracted"),


            };

            foreach (var employee in employees)
            {
             
                    _context.RosterAndAvais.Add(employee);
                
            }

            _context.SaveChanges();
        }
    }
}

using final_project_new.RosterAndAvais;
using final_project_new.ShiftOffers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.EntityFrameworkCore.Seed.ShiftOffers
{
    internal class DefaultShiftOfferBuilder
    {
        private readonly final_project_newDbContext _context;
        private readonly int _userId;

        public DefaultShiftOfferBuilder(final_project_newDbContext context, int userId)
        {
            _context = context;
            _userId = userId;
        }

        public void Create()
        {
            var shifts = new List<ShiftOffer>
            {
                new ShiftOffer(_userId, new DateTime(2022, 11, 28, 8, 0, 20), new DateTime(2022, 11, 28, 16, 0, 20), new DateTime(2022, 11, 28, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 11, 29, 6, 0, 20), new DateTime(2022, 11, 29, 12, 0, 20), new DateTime(2022, 11, 29, 6, 10, 20), "Early Start", false),
                new ShiftOffer(_userId, new DateTime(2022, 11, 29, 14, 0, 20), new DateTime(2022, 11, 29, 19, 0, 20), new DateTime(2022, 11, 29, 14, 10, 20), "Late Finish", false),
                new ShiftOffer(_userId, new DateTime(2022, 11, 30, 8, 0, 20), new DateTime(2022, 11, 30, 16, 0, 20), new DateTime(2022, 11, 30, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 2, 8, 0, 20), new DateTime(2022, 12, 2, 16, 0, 20), new DateTime(2022, 12, 2, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 5, 8, 0, 20), new DateTime(2022, 12, 5, 16, 0, 20), new DateTime(2022, 12, 5, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 6, 6, 0, 20), new DateTime(2022, 12, 6, 12, 0, 20), new DateTime(2022, 12, 6, 6, 10, 20), "Early Start", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 6, 14, 0, 20), new DateTime(2022, 12, 6, 19, 0, 20), new DateTime(2022, 12, 6, 14, 10, 20), "Late Finish", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 7, 6, 0, 20), new DateTime(2022, 12, 7, 12, 0, 20), new DateTime(2022, 12, 7, 6, 10, 20), "Early Start", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 7, 14, 0, 20), new DateTime(2022, 12, 7, 19, 0, 20), new DateTime(2022, 12, 7, 14, 10, 20), "Late Finish", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 8, 8, 0, 20), new DateTime(2022, 12, 8, 16, 0, 20), new DateTime(2022, 12, 8, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 9, 8, 0, 20), new DateTime(2022, 12, 9, 16, 0, 20), new DateTime(2022, 12, 9, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 12, 8, 0, 20), new DateTime(2022, 12, 12, 16, 0, 20), new DateTime(2022, 12, 12, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 13, 14, 0, 20), new DateTime(2022, 12, 13, 19, 0, 20), new DateTime(2022, 12, 13, 14, 10, 20), "Late Finish", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 14, 8, 0, 20), new DateTime(2022, 12, 14, 16, 0, 20), new DateTime(2022, 12, 14, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 15, 8, 0, 20), new DateTime(2022, 12, 15, 16, 0, 20), new DateTime(2022, 12, 15, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 19, 8, 0, 20), new DateTime(2022, 12, 19, 16, 0, 20), new DateTime(2022, 12, 19, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 20, 8, 0, 20), new DateTime(2022, 12, 20, 16, 0, 20), new DateTime(2022, 12, 20, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 21, 6, 0, 20), new DateTime(2022, 12, 21, 12, 0, 20), new DateTime(2022, 12, 21, 6, 10, 20), "Early Start", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 21, 14, 0, 20), new DateTime(2022, 12, 21, 19, 0, 20), new DateTime(2022, 12, 21, 14, 10, 20), "Late Finish", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 22, 8, 0, 20), new DateTime(2022, 12, 22, 16, 0, 20), new DateTime(2022, 12, 22, 8, 10, 20), "Additional Shift", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 23, 6, 0, 20), new DateTime(2022, 12, 23, 12, 0, 20), new DateTime(2022, 12, 23, 6, 10, 20), "Early Start", false),
                new ShiftOffer(_userId, new DateTime(2022, 12, 23, 14, 0, 20), new DateTime(2022, 12, 23, 19, 0, 20), new DateTime(2022, 12, 23, 14, 10, 20), "Late Finish", false),

            };

            foreach (var shift in shifts)
            {
                var existingShift = _context.ShiftOffers.IgnoreQueryFilters().FirstOrDefault(t => t.UserId == shift.UserId && DateTime.Compare(t.Date, shift.Date) == 0);

                if (existingShift == null)
                {
                    _context.ShiftOffers.Add(shift);
                }
                
            }
            _context.SaveChanges();
        }
    }
}

using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.ShiftOffers
{
    public class ShiftOffer:Entity
    {
        public int UserId { get; set; }
        public DateTime FromTime { get; set; }
        public DateTime ToTime { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }
        public bool IsAccep { get; set; }

        public ShiftOffer(int userId, DateTime fromTime, DateTime toTime, DateTime date, string type, bool isAccep)
        {
            UserId = userId;
            FromTime = fromTime;
            ToTime = toTime;
            Date = date;
            Type = type;
            IsAccep = isAccep;
        }
    }
}

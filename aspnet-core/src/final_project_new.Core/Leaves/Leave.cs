using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public class Leave:Entity
    {
        public int UserId { get; set; }
        public string Type { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Comment { get; set; }
        public bool Status { get; set; }

        public Leave(int userId, string type, DateTime fromDate, DateTime toDate, DateTime startTime, DateTime endTime, string comment, bool status)
        {
            UserId = userId;
            Type = type;
            FromDate = fromDate;
            ToDate = toDate;
            StartTime = startTime;
            EndTime = endTime;
            Comment = comment;
            Status = status;
        }
    }
}

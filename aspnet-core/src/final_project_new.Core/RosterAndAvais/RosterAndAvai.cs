using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.RosterAndAvais
{
    public class RosterAndAvai:Entity
    {
        public int UserId { get; set; }
        public TimeSpan FromTime { get; set; }
        public TimeSpan ToTime { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }
    }
}

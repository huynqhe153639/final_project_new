using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Notifications
{
    [AutoMapFrom(typeof(Notification))]
    public class NotificationListDto:EntityDto
    {
        public int UserId { get; set; }
        public string TypeNotification { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public string Content { get; set; }
        public DateTime TimeResgister { get; set; }
    }
}

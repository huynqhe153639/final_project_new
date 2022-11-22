using Abp.Application.Services;
using Abp.Domain.Repositories;
using final_project_new.RosterAndAvais;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Notifications
{
    public class NotificationAppService : AsyncCrudAppService<Notification, NotificationListDto>, INotificationAppService
    {
        public NotificationAppService(IRepository<Notification, int> repository) : base(repository)
        {
        }
    }
}

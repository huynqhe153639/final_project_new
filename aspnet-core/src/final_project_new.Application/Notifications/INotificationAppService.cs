using Abp.Application.Services;
using final_project_new.RosterAndAvais;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Notifications
{
    public interface INotificationAppService: IAsyncCrudAppService<NotificationListDto>
    {
    }
}

using Abp.Application.Services;
using Abp.Application.Services.Dto;
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
        Task<ListResultDto<NotificationListDto>> GetAllByDate(DateTime ?start,DateTime ?end);
        Task<ListResultDto<NotificationListDto>> GetAllCustom();

    }
}

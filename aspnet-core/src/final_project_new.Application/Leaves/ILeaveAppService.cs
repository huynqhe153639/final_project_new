using Abp.Application.Services;
using Abp.Application.Services.Dto;
using final_project_new.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public interface  ILeaveAppService: IAsyncCrudAppService<LeaveListDto>
    {
        Task<ListResultDto<LeaveListDto>> GetAllByDate(DateTime start, DateTime end);
        Task<ListResultDto<LeaveListDto>> GetAllCustom();


    }
}

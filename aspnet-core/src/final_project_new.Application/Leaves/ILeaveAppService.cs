using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public interface  ILeaveAppService: IAsyncCrudAppService<LeaveListDto>
    {
    }
}

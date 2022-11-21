using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public class LeaveAppService : AsyncCrudAppService<Leave, LeaveListDto>, ILeaveAppService
    {
        public LeaveAppService(IRepository<Leave> repository) : base(repository)
        {
        }
    }
}

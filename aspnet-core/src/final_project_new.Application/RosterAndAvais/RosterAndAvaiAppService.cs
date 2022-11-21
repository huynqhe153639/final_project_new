using Abp.Application.Services;
using Abp.Domain.Repositories;
using final_project_new.Leaves;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.RosterAndAvais
{
    public class RosterAndAvaiAppService : AsyncCrudAppService<RosterAndAvai, RosterAndAvaiListDtos>, IRosterAndAvaiAppService
    {
        public RosterAndAvaiAppService(IRepository<RosterAndAvai, int> repository) : base(repository)
        {
        }
    }
}

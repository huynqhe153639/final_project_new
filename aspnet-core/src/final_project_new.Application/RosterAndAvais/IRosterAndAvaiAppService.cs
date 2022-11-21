using Abp.Application.Services;
using final_project_new.Leaves;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.RosterAndAvais
{
    public interface IRosterAndAvaiAppService: IAsyncCrudAppService<RosterAndAvaiListDtos>
    {
    }
}

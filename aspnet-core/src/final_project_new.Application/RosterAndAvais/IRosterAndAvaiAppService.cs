using Abp.Application.Services;
using Abp.Application.Services.Dto;
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
        Task<ListResultDto<RosterAndAvaiListDtos>> GetAllByDate(DateTime date);
        Task<ListResultDto<RosterAndAvaiListDtos>> GetAllCustom();


    }
}

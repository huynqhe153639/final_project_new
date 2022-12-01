using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Runtime.Session;
using final_project_new.Leaves;
using final_project_new.Notifications;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.RosterAndAvais
{
    public class RosterAndAvaiAppService : AsyncCrudAppService<RosterAndAvai, RosterAndAvaiListDtos>, IRosterAndAvaiAppService
    {
        private readonly IRepository<RosterAndAvai> _rosterAndAvaiRepository;
        private readonly IAbpSession _abpSession;

        public RosterAndAvaiAppService(IRepository<RosterAndAvai> repository, IAbpSession abpSession) : base(repository)
        {
            _rosterAndAvaiRepository = repository;
            _abpSession = abpSession;
        }

        public async Task<ListResultDto<RosterAndAvaiListDtos>> GetAllCustom()
        {
            var rosterAndAvai = await _rosterAndAvaiRepository.GetAll().Where(rosterAndAvai =>  rosterAndAvai.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<RosterAndAvaiListDtos>>(rosterAndAvai);
            return new ListResultDto<RosterAndAvaiListDtos>(dtos);
        }

        public async Task<ListResultDto<RosterAndAvaiListDtos>> GetAllByDate(DateTime date)
        {
            var rosterAndAvai = await _rosterAndAvaiRepository.GetAll().Where(rosterAndAvai => rosterAndAvai.Date ==  date && rosterAndAvai.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<RosterAndAvaiListDtos>>(rosterAndAvai);
            return new ListResultDto<RosterAndAvaiListDtos>(dtos);
        }

        
    }
}

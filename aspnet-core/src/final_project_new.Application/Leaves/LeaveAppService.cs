using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Runtime.Session;
using final_project_new.Notifications;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public class LeaveAppService : AsyncCrudAppService<Leave, LeaveListDto>, ILeaveAppService
    {
        private readonly IRepository<Leave> _leaveRepository;
        private readonly IAbpSession _abpSession;

        public LeaveAppService(IRepository<Leave> repository, IAbpSession abpSession) : base(repository)
        {
            _leaveRepository = repository;
            _abpSession = abpSession;
        }

        public async Task<ListResultDto<LeaveListDto>> GetAllByDate(DateTime start, DateTime end)
        {
            var leave = await _leaveRepository.GetAll().Where(leave => leave.FromDate == start && leave.ToDate == end && leave.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<LeaveListDto>>(leave);
            return new ListResultDto<LeaveListDto>(dtos);
        }

        public async Task<ListResultDto<LeaveListDto>> GetAllCustom()
        {
            var leave = await _leaveRepository.GetAll().Where(leave =>  leave.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<LeaveListDto>>(leave);
            return new ListResultDto<LeaveListDto>(dtos);
        }
    }
}

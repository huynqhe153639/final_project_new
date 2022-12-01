using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using Abp.Runtime.Session;
using final_project_new.RosterAndAvais;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Notifications
{
    public class NotificationAppService : AsyncCrudAppService<Notification, NotificationListDto>, INotificationAppService
    {
        private readonly IAbpSession _abpSession;
        private readonly IRepository<Notification> _notificationRepository;

        public NotificationAppService(IRepository<Notification> repository, IAbpSession abpSession) : base(repository)
        {
            _notificationRepository = repository;
            _abpSession = abpSession;
        }

        public async Task<ListResultDto<NotificationListDto>> GetAllByDate(DateTime ?start, DateTime ?end)
        {
            var notification = await _notificationRepository.GetAll().Where(notification => notification.FromDate == start && notification.ToDate == end && notification.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<NotificationListDto>>(notification); 
            return new ListResultDto<NotificationListDto>(dtos);
        }

        public async Task<ListResultDto<NotificationListDto>> GetAllCustom()
        {
            var notification = await _notificationRepository.GetAll().Where(notification=> notification.UserId == _abpSession.GetUserId()).ToListAsync();
            var dtos = ObjectMapper.Map<List<NotificationListDto>>(notification);
            return new ListResultDto<NotificationListDto>(dtos);
        }
    }
}

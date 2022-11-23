using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Runtime.Session;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.ShiftOffers
{
    public class ShiftOfferAppService : final_project_newAppServiceBase, IShiftOfferAppService
    {
        private readonly IRepository<ShiftOffer> _shiftRepository;
        private readonly IAbpSession _abpSession;

        public ShiftOfferAppService(IRepository<ShiftOffer> shiftRepository, IAbpSession abpSession)
        {
            _shiftRepository = shiftRepository;
            _abpSession = abpSession;
        }

        public async Task<ListResultDto<ShiftOfferListDto>> GetAllShift()
        {
            var shiftListOfCurrentUser = await _shiftRepository.GetAll()
                .Where(x => x.UserId == _abpSession.GetUserId())
                .ToListAsync();

            if (shiftListOfCurrentUser == null)
            {
                throw new EntityNotFoundException();
            }

            var dtos = ObjectMapper.Map<List<ShiftOfferListDto>>(shiftListOfCurrentUser);

            return new ListResultDto<ShiftOfferListDto>(dtos);

        }

    }

}

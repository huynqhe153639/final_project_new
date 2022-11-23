using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.ShiftOffers
{
    public interface IShiftOfferAppService : IApplicationService
    {
        Task<ListResultDto<ShiftOfferListDto>> GetAllShift();

    }

    [AutoMapFrom(typeof(ShiftOffer))]
    public class ShiftOfferListDto : EntityDto
    {
        public int UserId { get; set; }
        public DateTime FromTime { get; set; }
        public DateTime ToTime { get; set; }
        public DateTime Date { get; set; }
        public string Type { get; set; }
        public bool IsAccep { get; set; }
    }

}

using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.RosterAndAvais
{
    public class RosterAndAvaiMapProfile : Profile
    {
        public RosterAndAvaiMapProfile()
        {
            CreateMap<RosterAndAvaiListDtos, RosterAndAvai>();

        }
    }
}

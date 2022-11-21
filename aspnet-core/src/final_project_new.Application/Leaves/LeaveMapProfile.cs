using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Leaves
{
    public class LeaveMapProfile: Profile
    {
        public LeaveMapProfile()
        {
            CreateMap<LeaveListDto, Leave>();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Users.Dto
{
    public class ResetPasswordInput
    {
        public Guid UserId { get; set; }
        public string Token { get; set; }
        public string NewPassword { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace final_project_new.Users.Dto
{
    public class ResetPasswordRequestInput
    {
        public string EmailAddress { get; set; }
        public string ReturnUrl { get; set; }
    }
}

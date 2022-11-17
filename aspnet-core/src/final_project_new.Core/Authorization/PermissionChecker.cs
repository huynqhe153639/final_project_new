using Abp.Authorization;
using final_project_new.Authorization.Roles;
using final_project_new.Authorization.Users;

namespace final_project_new.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}

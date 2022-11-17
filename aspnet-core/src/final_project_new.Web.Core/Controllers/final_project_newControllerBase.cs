using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace final_project_new.Controllers
{
    public abstract class final_project_newControllerBase: AbpController
    {
        protected final_project_newControllerBase()
        {
            LocalizationSourceName = final_project_newConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}

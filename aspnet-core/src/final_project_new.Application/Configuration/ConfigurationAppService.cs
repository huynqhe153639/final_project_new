using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using final_project_new.Configuration.Dto;

namespace final_project_new.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : final_project_newAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}

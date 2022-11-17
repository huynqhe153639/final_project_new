using System.Threading.Tasks;
using final_project_new.Configuration.Dto;

namespace final_project_new.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}

using System.Threading.Tasks;
using final_project_new.Models.TokenAuth;
using final_project_new.Web.Controllers;
using Shouldly;
using Xunit;

namespace final_project_new.Web.Tests.Controllers
{
    public class HomeController_Tests: final_project_newWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}
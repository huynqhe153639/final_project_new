using System.ComponentModel.DataAnnotations;

namespace final_project_new.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}
using final_project_new.Debugging;

namespace final_project_new
{
    public class final_project_newConsts
    {
        public const string LocalizationSourceName = "final_project_new";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "e58b4df60f644b3fa13413d9ae635b41";
    }
}

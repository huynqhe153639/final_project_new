using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace final_project_new.Localization
{
    public static class final_project_newLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(final_project_newConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(final_project_newLocalizationConfigurer).GetAssembly(),
                        "final_project_new.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}

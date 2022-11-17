namespace final_project_new.EntityFrameworkCore.Seed.Host
{
    public class InitialHostDbBuilder
    {
        private readonly final_project_newDbContext _context;

        public InitialHostDbBuilder(final_project_newDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();

            _context.SaveChanges();
        }
    }
}

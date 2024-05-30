using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ReactCSVPeople.Data
{
    public class CSVPeopleContextFactory : IDesignTimeDbContextFactory<CSVPeopleDataContext>
    {
        public CSVPeopleDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactCSVPeople.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CSVPeopleDataContext(config.GetConnectionString("ConStr"));
        }
    }
}
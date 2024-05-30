using Microsoft.EntityFrameworkCore;

namespace ReactCSVPeople.Data
{
    public class CSVPeopleDataContext : DbContext
    {
        private readonly string _connectionString;

        public CSVPeopleDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Person> People { get; set; }
    }
}
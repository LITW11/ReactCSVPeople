using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ReactCSVPeople.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(List<Person> people)
        {
            using var context = new CSVPeopleDataContext(_connectionString);
            context.People.AddRange(people);
            context.SaveChanges();
        }

        public List<Person> GetAll()
        {
            using var context = new CSVPeopleDataContext(_connectionString);
            return context.People.ToList();
        }

        public void DeleteAll()
        {
            using var context = new CSVPeopleDataContext(_connectionString);
            context.People.ExecuteDelete();
        }
    }
}
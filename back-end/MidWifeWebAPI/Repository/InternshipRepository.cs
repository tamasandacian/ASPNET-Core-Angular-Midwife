using Microsoft.Extensions.Options;
using MidWifeWebAPI.Data;
using MidWifeWebAPI.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace MidWifeWebAPI.Repository
{

    public interface IInternshipRepository
    {
        List<Internship> GetAllInternships();
    }

    public class InternshipRepository : IInternshipRepository
    {

        private readonly MongoDbContext _context = null;

        public InternshipRepository(IOptions<Settings> settings)
        {
            _context = new MongoDbContext(settings);

        }

        public List<Internship> GetAllInternships()
        {
            List<Internship> internshipList = new List<Internship>();

            var data = (from iship in _context.Internships.Find(_ => true).ToEnumerable()
                        select new
                        {
                            iship.Id,
                            iship.InternshipName

                        }).ToList();

            data.ForEach(x =>
            {
                Internship obj = new Internship();
                obj.Id = x.Id;
                obj.InternshipName = x.InternshipName;
                internshipList.Add(obj);
            });

            return internshipList;
        }
    }
}

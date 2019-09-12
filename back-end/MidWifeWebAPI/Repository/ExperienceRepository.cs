using Microsoft.Extensions.Options;
using MidWifeWebAPI.Data;
using MidWifeWebAPI.Models;
using MidWifeWebAPI.Models.ViewModels;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace MidWifeWebAPI.Repository
{

    public interface IExperienceRepository
    {
        List<Experience> GetAllExperiences();
        List<ExperienceViewModel> GetExpsByDateAndUserId(string date, string userId, string internshipId);
        List<Object> GetUnionLists(string date, string userId, string internshipId);
        List<DataExportViewModel> ExportData(string internshipId, string userId);
    }
    public class ExperienceRepository : IExperienceRepository
    {

        List<Experience> expListCollection;
        List<ExperienceViewModel> expDescListCollection;

        private readonly MongoDbContext _context = null;
        private readonly IUserRepository _userRepository;

        public ExperienceRepository(IOptions<Settings> settings, IUserRepository userRepository)
        {
            _context = new MongoDbContext(settings);
            _userRepository = userRepository;

        }

        public List<Experience> GetAllExperiences()
        {
            expListCollection = new List<Experience>();

            var listData = (from tsk in _context.Experiences.Find(_ => true).ToEnumerable()

                            select new
                            {
                                tsk.Id,
                                tsk.Title,
                            }).ToList();


            listData.ForEach(x =>
            {
                Experience obj = new Experience();
                obj.Id = x.Id;
                obj.Title = x.Title;
                expListCollection.Add(obj);

            });

            return expListCollection;
        }

        /* Retrieve all tasks by date */
        public List<ExperienceViewModel> GetExpsByDateAndUserId(string date, string userId, string internshipId)
        {

            try
            {
                /* Filter is the query */
                var filter = Builders<ExperienceDescription>.Filter.Eq(x => x.Date, date);
                var filter2 = Builders<ExperienceDescription>.Filter.Eq(x => x.UserId, userId);
                filter = filter & filter2 & (Builders<ExperienceDescription>.Filter.Eq(x => x.InternshipId, internshipId));

                expDescListCollection = new List<ExperienceViewModel>();

                var listData = (from expDesc in _context.ExperiencesDescriptions.Find(filter).ToEnumerable()
                                join exp in _context.Experiences.Find(_ => true).ToEnumerable() on expDesc.TaskId equals exp.Id

                                select new
                                {
                                    exp.Title,
                                    expDesc.Date,
                                    expDesc.IsChecked,
                                    expDesc.NoOfTimes,
                                    expDesc.TaskId,
                                    expDesc.UserId,
                                }).ToList();


                listData.ForEach(x =>
                {
                    ExperienceViewModel obj = new ExperienceViewModel();

                    obj.Title = x.Title;
                    obj.Date = x.Date;
                    obj.IsChecked = x.IsChecked;
                    obj.NoOfTimes = x.NoOfTimes;
                    obj.TaskId = x.TaskId;
                    obj.UserId = x.UserId;

                    expDescListCollection.Add(obj);

                });

                return expDescListCollection;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /*
         Emerge the predefined list of all experiences from experience collection with the list of experience descriptions 
         from experienceDescription collection, remove duplicates of the same experience and store into a final list
        */
        public List<Object> GetUnionLists(string date, string userId, string internshipId)
        {
            List<Object> unionList = new List<Object>();

            expDescListCollection = GetExpsByDateAndUserId(date, userId, internshipId);
            expListCollection = GetAllExperiences();

            if (expDescListCollection.Count == 0)
            {
                return expListCollection.Cast<Object>().ToList();
            }
            else
            {
                foreach (Experience tl in expListCollection.ToList())
                {
                    foreach (ExperienceViewModel tld in expDescListCollection.ToList())
                    {
                        if (tl.Id == tld.TaskId)
                        {
                            /* remove duplicates*/
                            expListCollection.Remove(tl);
                        }
                    }
                }


                unionList = expListCollection.Cast<Object>().Concat(expDescListCollection).ToList();
                return unionList;
            }
        }

        /*
         Compute Overview as the Total No Of Times for each task
        */
        public List<DataExportViewModel> ExportData(string internshipId, string userId)
        {
            List<DataExportViewModel> exportList = new List<DataExportViewModel>();

            try
            {
                var filter = Builders<ExperienceDescription>.Filter.Eq(x => x.InternshipId, internshipId);
                var filter2 = Builders<ExperienceDescription>.Filter.Eq(x => x.UserId, userId);
                filter = filter & filter2 & Builders<ExperienceDescription>.Filter.Gt(x => x.NoOfTimes, 0);
              
                var listData = (from expDesc in _context.ExperiencesDescriptions.Find(filter).ToEnumerable()
                                join exp in _context.Experiences.Find(_ => true).ToEnumerable() on expDesc.TaskId equals exp.Id
                                join iship in _context.Internships.Find(_ => true).ToEnumerable() on expDesc.InternshipId equals iship.Id
                                join us in _context.Users.Find(_ => true).ToEnumerable() on expDesc.UserId equals us.Id
                                select new
                                {
                                    exp.Id,
                                    exp.Title,
                                    expDesc.Date,
                                    expDesc.IsChecked,
                                    expDesc.NoOfTimes,
                                    expDesc.TaskId,
                                    expDesc.UserId,
                                    iship.InternshipName,
                                    us.Email,
                                    us.FirstName,
                                    us.LastName

                                }).ToList();

                Dictionary<string, int> dictionary = new Dictionary<string, int>();

                // This first iteration is for computing the sum of each task
                listData.ForEach(x =>
                {
                   
                    int prevSumNum = 0;

                    // This is a previously seen taskID
                    if (dictionary.ContainsKey(x.TaskId))
                    {
                        // Get previous sum
                        prevSumNum = dictionary[x.TaskId];

                        // Update the sum of taskID by adding with the current value
                        dictionary[x.TaskId] = prevSumNum + x.NoOfTimes;
                        Debug.WriteLine("Existing task[" + x.TaskId + "]: Current sum is " + dictionary[x.TaskId]);
                    }

                    // This is a new taskID
                    else {
                        // Add a new task to the dictionary with the first sum value
                        dictionary.Add(x.TaskId, prevSumNum + x.NoOfTimes);
                        Debug.WriteLine("New task[" + x.TaskId + "]: Current sum is " + dictionary[x.TaskId]);
                    }

                });

                // This second iteration is for assign the final sum to each distinct task object
                HashSet<String> taskIDList = new HashSet<String>();
                listData.ForEach(x =>
                {
                    // Check if a taskID is not seen before
                    if (!taskIDList.Contains(x.TaskId))
                    {
                        DataExportViewModel obj = new DataExportViewModel();

                        obj.Title = x.Title;
                        obj.InternshipName = x.InternshipName;
                        obj.TotalNoOfTimes = dictionary[x.TaskId];
                        obj.Email = x.Email;
                        obj.FirstName = x.FirstName;
                        obj.LastName = x.LastName;
                        
                        exportList.Add(obj);

                        // Update the list of taskID that has been added
                        taskIDList.Add(x.TaskId);
                    }
                });
                
            }
            catch (Exception ex)
            {
                throw ex;
            }


            return exportList;
        }
    }
}

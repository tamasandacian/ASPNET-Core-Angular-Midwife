using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MidWifeWebAPI.Data;
using MidWifeWebAPI.Models;
using MidWifeWebAPI.Models.ViewModels;
using MidWifeWebAPI.Repository;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;


namespace MidWifeWebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Experience")]
    public class ExperienceController : Controller
    {

        private readonly MongoDbContext _context = null;
        private readonly IExperienceRepository _expRepository;


        public ExperienceController(IExperienceRepository expRepository, IOptions<Settings> settings)
        {
            _context = new MongoDbContext(settings);
            _expRepository = expRepository;
        }

        [HttpGet]
        public IActionResult GetAllTasks()
        {
            return GetExperiences();
        }

        private IActionResult GetExperiences()
        {
            var experiences = _expRepository.GetAllExperiences();
            return Json(experiences);
        }

        [HttpGet("[action]/{date}/{userId}/{internshipId}")]
        public IActionResult GetUnionCollections(string date, string userId, string internshipId)
        {
            var tasks = _expRepository.GetUnionLists(date, userId, internshipId);
            return Json(tasks);
        }

        [HttpGet("[action]/{internshipId}/{userId}")]
        public IActionResult GetExportData(string internshipId, string userId)
        {
            var exportData = _expRepository.ExportData(internshipId, userId);
            return Json(exportData);
        }

        [HttpPut("[action]")]
        public IActionResult StoreOrUpdateData([FromBody] JObject data, ExperienceDescription expDesc)
        {

            try
            {
                expDesc = new ExperienceDescription();

                string userId = data["userId"].ToObject<string>();
                string internshipId = data["internshipId"].ToObject<string>();
                string taskId = data["taskId"].ToObject<string>();
                string date = data["taskDate"].ToObject<string>();
                int noOfTimes = data["noOfTimes"].ToObject<int>();
               
                expDesc.NoOfTimes = noOfTimes;
                expDesc.TaskId = taskId;
                expDesc.UserId = userId;
                expDesc.InternshipId = internshipId;
                expDesc.Date = date;
                expDesc.IsChecked = true;

                var check = _context.ExperiencesDescriptions.AsQueryable()
                    .Any(expColl => expColl.TaskId == expDesc.TaskId && expColl.Date == date && expColl.UserId == expDesc.UserId);

                if (check)
                {
                    var filter = Builders<ExperienceDescription>.Filter.Eq(x => x.TaskId, taskId);
                    var filter2 = Builders<ExperienceDescription>.Filter.Eq(x => x.UserId, userId);
                    filter = filter & filter2 & (Builders<ExperienceDescription>.Filter.Eq(x => x.Date, date));

                    if(noOfTimes == 0)
                    {
                        _context.ExperiencesDescriptions.UpdateOneAsync(filter, Builders<ExperienceDescription>
                                           .Update.Set("NoOfTimes", expDesc.NoOfTimes)
                                                   .Set("IsChecked", false));
                    }

                    else
                    {
                        _context.ExperiencesDescriptions.UpdateOneAsync(filter, Builders<ExperienceDescription>
                                            .Update.Set("NoOfTimes", expDesc.NoOfTimes)
                                                    .Set("IsChecked", true));
                    }
                
                } 
                else
                {
                    _context.ExperiencesDescriptions.InsertOne(expDesc);

                }

            }

            catch (Exception ex)
            {
                throw ex;
            }

            return Ok();
        }


    }
}
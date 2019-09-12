using Microsoft.AspNetCore.Mvc;
using MidWifeWebAPI.Repository;

namespace MidWifeWebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Internship")]
    public class InternshipController : Controller
    {
        private readonly IInternshipRepository _internshipRepository;

        public InternshipController(IInternshipRepository internshipRepository)
        {
            _internshipRepository = internshipRepository;
        }


        [HttpGet]
        public IActionResult GetAllInternships()
        {
            return GetInternships();
        }

        private IActionResult GetInternships()
        {
            var internships = _internshipRepository.GetAllInternships();
            return Json(internships);
        }


    }
}
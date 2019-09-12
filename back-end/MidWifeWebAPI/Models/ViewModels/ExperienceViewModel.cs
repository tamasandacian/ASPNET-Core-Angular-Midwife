namespace MidWifeWebAPI.Models.ViewModels
{
    public class ExperienceViewModel
    {
  
        public string Title { get; set; }
        public string Date { get; set; }
        public bool IsChecked { get; set; }
        public int NoOfTimes { get; set; }
        public string UserId { get; set; }
        public string TaskId { get; set; }
        public string InternshipId { get; set; }
        public string InternshipName { get; set; }
        public int TotalNoOfTimes { get; set; }
    }
}

using MidWifeWebAPI.Models;
using MidWifeWebAPI.Models.ViewModels;
using AutoMapper;

namespace MidWifeWebAPI.Data
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserViewModel>();
            CreateMap<UserViewModel, User>();
        }
    }
}

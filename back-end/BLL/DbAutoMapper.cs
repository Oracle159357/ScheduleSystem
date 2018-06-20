using AutoMapper;
using BLL.PresentationClasses;
using Kasaki.Entities;


namespace BLL
{
    public class DbAutoMapper
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Room, RoomEntity>();
                cfg.CreateMap<Departament, DepartamentEntity>();
                cfg.CreateMap<Departament, DepartamentEntity>();
                cfg.CreateMap<DepartamentEntity, Departament>();
                cfg.CreateMap<GroupEntity, Group>();
                cfg.CreateMap<RoomEntity, Room>();
                cfg.CreateMap<SubjectEntity, Subject>();
                cfg.CreateMap<LectureEntity, Lecture>();
                cfg.CreateMap<TeacherEntity, Teacher>();
                cfg.CreateMap<UserEntity, User>();
            });

        }

    }
}
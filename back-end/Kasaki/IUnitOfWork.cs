using System.Text.RegularExpressions;
using Kasaki.Entities;

namespace Kasaki
{
    public interface IUnitOfWork
    {
        ContextRepository<UserEntity> Users { get; }
        ContextRepository<DepartamentEntity> Departaments { get; }
        ContextRepository<GroupEntity> Groups { get; }
        ContextRepository<LectureEntity> Lectures { get; }
        ContextRepository<RoomEntity> Rooms { get; }
        ContextRepository<SubjectEntity> Subjects { get; }
        ContextRepository<TeacherEntity> Teachers { get; }
        void Save();
        void Dispose();
    }
}
using System;
using Kasaki.Entities;

namespace Kasaki
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private readonly RozkladContext _db;

        public UnitOfWork(RozkladContext db, ContextRepository<UserEntity> userRepository,
            ContextRepository<DepartamentEntity> departamentRepository, ContextRepository<GroupEntity> groupRepository,
            ContextRepository<LectureEntity> lectureRepository, ContextRepository<RoomEntity> roomRepository,
            ContextRepository<SubjectEntity> subjectRepository, ContextRepository<TeacherEntity> teacherRepository)
        {
            _db = db;
            Users = userRepository;
            Departaments = departamentRepository;
            Groups = groupRepository;
            Lectures = lectureRepository;
            Rooms = roomRepository;
            Subjects = subjectRepository;
            Teachers = teacherRepository;
        }

        public ContextRepository<UserEntity> Users { get; }

        public ContextRepository<DepartamentEntity> Departaments { get; }

        public ContextRepository<GroupEntity> Groups { get; }

        public ContextRepository<LectureEntity> Lectures { get; }

        public ContextRepository<RoomEntity> Rooms { get; }

        public ContextRepository<SubjectEntity> Subjects { get; }

        public ContextRepository<TeacherEntity> Teachers { get; }

        public void Save()
        {
            _db.SaveChanges();
        }

        private bool _disposed;


        protected virtual void Dispose(bool disposing)
        {
            if (_disposed) return;
            if (disposing)
            {
                _db.Dispose();
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
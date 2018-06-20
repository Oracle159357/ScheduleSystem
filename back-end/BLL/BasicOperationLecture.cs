using System.Collections.Generic;
using AutoMapper;
using BLL.PresentationClasses;
using Kasaki;
using Kasaki.Entities;

namespace BLL
{
    public class BasicOperationLecture
    {
        private readonly UnitOfWork _uow;

        public BasicOperationLecture(UnitOfWork uow)
        {
            this._uow = uow;
        }

        public List<Lecture> GetLecture()
        {
            return Mapper.Map<IEnumerable<LectureEntity>, List<Lecture>>(_uow.Lectures.Get());
        }

        public Lecture GetLectureById(int id)
        {
            return Mapper.Map<LectureEntity, Lecture>(_uow.Lectures.GetOne(lecture =>
                lecture.LctPk == id));
        }

        public void AddLecture(Lecture lecture)
        {
            _uow.Lectures.Create(new LectureEntity
            {
                Day = lecture.Day,
                Lesson = lecture.Lesson,
                Week = lecture.Week,
                GroupId = lecture.GroupId,
                RoomId = lecture.RoomId,
                TeacherId = lecture.TeacherId,
                SubjectId = lecture.SubjectId
            });
            _uow.Save();
        }

        public void ChangeLecture(Lecture lecture)
        {
            _uow.Lectures.Update(new LectureEntity
            {
                Day = lecture.Day,
                Lesson = lecture.Lesson,
                Week = lecture.Week,
                LctPk = lecture.LctPk,
                GroupId = lecture.GroupId,
                RoomId = lecture.RoomId,
                TeacherId = lecture.TeacherId,
                SubjectId = lecture.SubjectId
            });
            _uow.Save();
        }

        public void DeleteLecture(int id)
        {
            _uow.Lectures.Remove(_uow.Lectures.FindById(id));
            _uow.Save();
        }
    }
}
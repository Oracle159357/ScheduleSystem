using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kasaki.Entities
{
    public class LectureEntity
    {
        [Key]
        [Required]
        public int LctPk { get; set; }

        public string Day { get; set; }

        public int Week { get; set; }

        public int Lesson { get; set; }

        public int GroupId { get; set; }
        public virtual GroupEntity GroupEntity { get; set; }
 
        public int TeacherId { get; set; }
        public virtual TeacherEntity TeacherEntity { get; set; }
 
        public int RoomId { get; set; }
        public virtual RoomEntity RoomEntity { get; set; }

        public int SubjectId { get; set; }
        public virtual SubjectEntity SubjectEntity { get; set; }
    }
}
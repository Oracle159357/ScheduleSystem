namespace BLL.PresentationClasses
{
    public class Lecture
    {
        public int LctPk { get; set; }



        public string Day { get; set; }
        public int Week { get; set; }
        public int Lesson { get; set; }
        public int GroupId { get; set; }

        public int TeacherId { get; set; }

        public int RoomId { get; set; }

        public int SubjectId { get; set; }
    }
}
namespace BLL.PresentationClasses
{
    public class Teacher
    {
        public int TchPk { get; set; }
        public int DepartamentId { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Patronymic { get; set; }
    }
}
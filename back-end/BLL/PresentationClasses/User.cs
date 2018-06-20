namespace BLL.PresentationClasses
{
    public enum StatusUser
    {
        a,b,c,d,f
    }
    public class User
    {
        public int UsrPk { get; set; }
        public StatusUser Status { get; set; }
        public string Name { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;

namespace Kasaki.Entities

{
    public enum StatusUser {a,b,c,d,f, }
    public class UserEntity
    {
        [Key]
        [Required]
        public  int UsrPk { get; set; }
        [Required]
        public StatusUser Status { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Login { get; set; }
    }
}
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Kasaki.Entities
{
    public class DepartamentEntity
    {
        
        [Key]
        [Required]
        public int DepPk { get; set; }

        [Required] //unique
        public string Name { get; set; }

 
        [Required]
        public string Building { get; set; }
        public virtual ICollection<TeacherEntity> Teachers { get; set; }
        public virtual ICollection<GroupEntity> Groups { get; set; }
    }
}
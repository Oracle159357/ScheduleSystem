using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kasaki.Entities
{
   public class TeacherEntity
    {
        [Key]
        [Required]
        public int TchPk { get; set; }

       

        public int DepartamentId { get; set; }
        //[ForeignKey("DepartamentId")]
        public virtual DepartamentEntity DepartamentEntity { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Patronymic { get; set; }
        public virtual ICollection<LectureEntity> Lectures { get; set; }
    }
}

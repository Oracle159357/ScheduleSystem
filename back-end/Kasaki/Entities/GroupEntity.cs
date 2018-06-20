using System.Collections.Generic;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kasaki.Entities
{
    public class GroupEntity
    {
        [Key]
        [Required]
        public int GrpPk { get; set; }

        //[Required]
   
        public int DepartamentId { get; set; }

      //  [ForeignKey("DepartamentId")]
        public virtual DepartamentEntity DepartamentEntity { get; set; }

        [Required]
        public int Course { get; set; }

        [Required]
        public int Num { get; set; }
       public virtual ICollection<LectureEntity> Lectures { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kasaki.Entities
{
    public class SubjectEntity
    {
        [Key]
        [Required]
        public int SbjPk { get; set; }
      //  [MaxLength(50)]
        [Required]
        public string Name { get; set; }

    }
}

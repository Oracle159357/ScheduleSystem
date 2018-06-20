using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kasaki.Entities
{
    public class RoomEntity
    {
        [Key]
        [Required]
        public int RomPk { get; set; }
        [Required]
        public int Num { get; set; }
        //находиться от 1 до 10 всегда
        public string Building { get; set; }

     //   public Subject Disciplene { get; set; }
     //   public DBTeacher Teacher { get; set; }
    }
}

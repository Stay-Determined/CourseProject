using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIRunning.Models
{

    [Table("Course", Schema = "archi")]
    public class Course
    {
        public int ID { get; set; } // ou [KEY]

        [Required(ErrorMessage = "Le nom est obligatoire.")]
        [StringLength(150)]
        [Column("Nom")]
        public string Nom { get; set; } = "";

        [Required(ErrorMessage = "Le Lieux est obligatoire.")]
        [StringLength(150)]
        [Column("Lieux")]
        public string Prenom { get; set; } = "";

        [StringLength(150)]
        [Column("Score")]
        public string? Score { get; set; } = "";

        [StringLength(150)]
        [Column("Time")]
        public String? Temps { get; set; } = "";

        [Required(ErrorMessage = "Le Active est obligatoire.")]
        [Column("Active")]
        public Boolean Active { get; set; } = false;

        [Required(ErrorMessage = "Le Reussite est obligatoire.")]
        [Column("Reussis")]
        public Boolean Reussis { get; set; } = false;

        [Required(ErrorMessage = "Le Nombre de Course est obligatoire.")]
        [Column("NombreCourse")]
        public int NombreCourse { get; set; } = 0;

        [Required(ErrorMessage = "Le Nombre de Balise est obligatoire.")]
        [Column("NombreBalise")]
        public int NombreBalise { get; set; } = 0;
    }


}


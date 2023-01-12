using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIRunning.Models
{

    [Table("Balise", Schema = "archi")]
    public class Balise
    {
        public int ID { get; set; } // ou [KEY]

        [Required(ErrorMessage = "L'Ordre de Balise est obligatoire.")]
        [Column("OrdreBalise")]
        public int NombreBalise { get; set; } = 0;

        [Required(ErrorMessage = "Le nom est obligatoire.")]
        [StringLength(150)]
        [Column("Nom")]
        public string Nom { get; set; } = "";

        public int CourseID { get; set; }
        [ForeignKey("CourseID")]
        public Course? Course { get; set; }

        [Required(ErrorMessage = "La Cordonnees X est obligatoire.")]
        [Column("CordonneesX")]
        public int CordonneesX { get; set; } = 0;

        [Required(ErrorMessage = "La Cordonnees Y est obligatoire.")]
        [Column("CordonneesY")]
        public int CordonneesY { get; set; } = 0;

        [Required(ErrorMessage = "L'Activation est obligatoire.")]
        [Column("Activation")]
        public Boolean Active { get; set; } = false;
        
        [Required(ErrorMessage = "Le Question est obligatoire.")]
        [StringLength(150)]
        [Column("Question")]
        public string Question { get; set; } = "";

        [Required(ErrorMessage = "Le Reponse1 est obligatoire.")]
        [StringLength(150)]
        [Column("Reponse1")]
        public string Reponse1 { get; set; } = "";

        [Required(ErrorMessage = "Le Reponse2 est obligatoire.")]
        [StringLength(150)]
        [Column("Reponse2")]
        public string Reponse2 { get; set; } = "";

        [Required(ErrorMessage = "Le Reponse3 est obligatoire.")]
        [StringLength(150)]
        [Column("Reponse3")]
        public string Reponse3 { get; set; } = "";

        [Required(ErrorMessage = "Le ReponseBonne est obligatoire.")]
        [StringLength(150)]
        [Column("ReponseBonne")]
        public string ReponseBonne { get; set; } = "";

        [Required(ErrorMessage = "L'BonneReponseDonnee est obligatoire.")]
        [Column("BonneReponseDonnee")]
        public Boolean BonneReponseDonnee { get; set; } = false;
    }


}


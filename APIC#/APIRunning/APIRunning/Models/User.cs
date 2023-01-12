using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIRunning.Models
{
  
   [Table("User", Schema ="archi")]
   public class User
   {
        public int ID { get; set; } // ou [KEY]

        [Required(ErrorMessage = "Le nom est obligatoire.")]
        [StringLength(150)]
        [Column("Nom")]
        public string Nom { get; set; } = "";

        [Required(ErrorMessage = "Le Prenom est obligatoire.")]
        [StringLength(150)]
        [Column("Prenom")]
        public string Prenom { get; set; } = "";

        [Required(ErrorMessage = "Le Role est obligatoire.")]
        [StringLength(150)]
        [Column("Role")]
        public string Role { get; set; } = "";

        [Required(ErrorMessage = "Le Email est obligatoire.")]
        [StringLength(150)]
        [Column("Email")]
        public string Email { get; set; } = "";

        [Required(ErrorMessage = "Le MDP est obligatoire.")]
        [StringLength(150)]
        [Column("MDP")]
        public string MDP { get; set; } = "";

        [Required(ErrorMessage = "Le MDPConf est obligatoire.")]
        [StringLength(150)]
        [Column("MDPConf")]
        public string MDPConf { get; set; } = "";

   }
    
    
}


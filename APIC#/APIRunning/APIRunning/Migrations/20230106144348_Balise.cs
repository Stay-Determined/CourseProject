using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIRunning.Migrations
{
    public partial class Balise : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Balise",
                schema: "archi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrdreBalise = table.Column<int>(type: "int", nullable: false),
                    Nom = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    CourseID = table.Column<int>(type: "int", nullable: false),
                    CordonneesX = table.Column<int>(type: "int", nullable: false),
                    CordonneesY = table.Column<int>(type: "int", nullable: false),
                    Activation = table.Column<bool>(type: "bit", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Reponse1 = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Reponse2 = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Reponse3 = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    ReponseBonne = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    BonneReponseDonnee = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Balise", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Balise_Course_CourseID",
                        column: x => x.CourseID,
                        principalSchema: "archi",
                        principalTable: "Course",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Balise_CourseID",
                schema: "archi",
                table: "Balise",
                column: "CourseID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Balise",
                schema: "archi");
        }
    }
}

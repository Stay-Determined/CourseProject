using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIRunning.Migrations
{
    public partial class Courses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Course",
                schema: "archi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Lieux = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Score = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Time = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    Reussis = table.Column<bool>(type: "bit", nullable: false),
                    NombreCourse = table.Column<int>(type: "int", nullable: false),
                    NombreBalise = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Course", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Course",
                schema: "archi");
        }
    }
}

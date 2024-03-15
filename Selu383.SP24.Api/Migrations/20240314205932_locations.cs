using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable


namespace Selu383.SP24.Api.Migrations
{
    /// <inheritdoc />
    public partial class Locations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.Id);
                });

#pragma warning disable CA1861 // Avoid constant arrays as arguments
            migrationBuilder.InsertData(
                table: "City",
                columns: new[] { "Id", "Location" },
                values: new object[,]
                {
                    { 1, "Baton Rouge" },
                    { 2, "New Orleans" }
                });
#pragma warning restore CA1861 // Avoid constant arrays as arguments
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "City");
        }
    }
}

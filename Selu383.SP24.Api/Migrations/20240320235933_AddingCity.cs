using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Selu383.SP24.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddingCity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM [dbo].[Hotel]");
            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Hotel"
                );

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Hotel",
                type: "string",
                nullable: false,
                defaultValue: ""
                );

            migrationBuilder.CreateIndex(
                name: "IX_Hotel_CityId",
                table: "Hotel",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Hotel_City_CityId",
                table: "Hotel",
                column: "CityId",
                principalTable: "City",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Hotel_City_CityId",
                table: "Hotel");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropIndex(
                name: "IX_Hotel_CityId",
                table: "Hotel");

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Hotel");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace final_project_new.Migrations
{
    public partial class Update_User_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "AbpUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "AbpUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "AbpUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "endTime",
                table: "AbpUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isAdditionalShift",
                table: "AbpUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isEarlyStart",
                table: "AbpUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isLateFinish",
                table: "AbpUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "prefferDays",
                table: "AbpUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "startTime",
                table: "AbpUsers",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "Position",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "endTime",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "isAdditionalShift",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "isEarlyStart",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "isLateFinish",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "prefferDays",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "startTime",
                table: "AbpUsers");
        }
    }
}

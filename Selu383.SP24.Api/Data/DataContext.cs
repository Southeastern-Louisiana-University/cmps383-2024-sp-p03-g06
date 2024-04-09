using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Selu383.SP24.Api.Features.Authorization;
using Selu383.SP24.Api.Features.Hotels;
namespace Selu383.SP24.Api.Data;

public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    public DataContext()
    {
    }
    public virtual DbSet<Hotel> Hotel { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        /*modelBuilder.Entity<Hotel>().HasData(new Hotel
        {
            Id = 1,
            Name = "Test",
            City = "New Orleans",
            Address = "123 Poydras st"
        });*/

        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
    }
}

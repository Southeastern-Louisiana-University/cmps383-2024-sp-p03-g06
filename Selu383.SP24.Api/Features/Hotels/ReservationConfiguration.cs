using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Selu383.SP24.Api.Features.Hotels
{
    public class ReservationConfiguration : IEntityTypeConfiguration<Reservation>
    {
        public void Configure(EntityTypeBuilder<Reservation> builder)
        {
            builder
                .HasOne(x => x.Room)
                .WithMany(x => x.Reservations)
                .HasForeignKey(x => x.RoomId)
                .IsRequired();

            builder
                .HasOne(x => x.User)
                .WithMany(x => x.Reservations)
                .HasForeignKey(x => x.UserId)
                .IsRequired();
        }
    }
}

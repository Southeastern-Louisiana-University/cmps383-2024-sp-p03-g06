using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Selu383.SP24.Api.Features.Hotels
{
    public class RoomConfiguration : IEntityTypeConfiguration<Room>
    {
   
            public void Configure(EntityTypeBuilder<Room> builder)
            {
                builder.Property(x => x.Beds)
                    .HasMaxLength(120)
                    .IsRequired();

                builder.Property(x => x.Availability)
                    .IsRequired();

                builder.HasKey(x => x.Id);

                builder.HasOne(x => x.RoomType)
                    .WithMany(x => x.Rooms)
                    .HasForeignKey(x => x.RoomTypeId);

                /*builder.HasOne<Hotel>(x => x.Hotel)
                    .WithMany(h => h.Rooms)
                    .HasForeignKey(x => x.HotelId)
                    .IsRequired();

                builder
                    .HasOne<RoomType>(x => x.RoomType)
                    .WithMany()
                    .HasForeignKey(x => x.RoomTypeId)
                    .IsRequired(false);*/
            }
    }
}

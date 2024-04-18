
namespace Selu383.SP24.Api.Features.Hotels
{
    public class RoomDto
    {
        public int Id { get; set; }
        public int? HotelId { get; set; }
        public string? Beds { get; set; }
        public string? HotelName { get; set; }
        public bool Availability { get; set; }

        public int? RoomTypeId { get; set; }
        public string? RoomName { get; set;}
    }
}

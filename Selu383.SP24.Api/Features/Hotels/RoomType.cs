using System.Collections;

namespace Selu383.SP24.Api.Features.Hotels
{
    public class RoomType
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int NumberOfBeds { get; set; }

        public Hotel? Hotel { get; set; }
        public int HotelId { get; set; }

        
        public List<Room> Rooms { get; set; } = new List<Room>();
    }
}

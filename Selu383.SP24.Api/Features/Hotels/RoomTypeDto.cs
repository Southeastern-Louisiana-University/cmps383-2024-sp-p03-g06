namespace Selu383.SP24.Api.Features.Hotels
{
    public class RoomTypeDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int NumberofBeds { get; set; }
        public List<Room>? Rooms { get; set; } 

    }
}

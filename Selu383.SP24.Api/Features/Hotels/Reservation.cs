namespace Selu383.SP24.Api.Features.Hotels
{
    public class Reservation
    {
        int Id { get; set; }
        public string? Dates { get; set; }
        public int Guest { get; set; }
        public Room? RoomReserved { get; set; }
    }
}

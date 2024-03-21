namespace Selu383.SP24.Api.Features.Hotels
{
    public class Reservation
    {
#pragma warning disable IDE0051 // Remove unused private members
        int Id { get; set; }
#pragma warning restore IDE0051 // Remove unused private members
        public string? Dates { get; set; }
        public int Guest { get; set; }
        public Room? RoomReserved { get; set; }
    }
}

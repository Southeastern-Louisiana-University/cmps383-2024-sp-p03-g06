using Selu383.SP24.Api.Features.Authorization;
namespace Selu383.SP24.Api.Features.Hotels
{
    public class Reservation
    {
        public int Id { get; set; }
        public string? Dates { get; set; }
        public int Guest { get; set; }
        public Room? RoomReserved { get; set; }
        public Room? Room { get; set; }
        public int RoomId { get; set; }
        public User? User { get; set; }
        public int UserId { get; set; }
    }
}

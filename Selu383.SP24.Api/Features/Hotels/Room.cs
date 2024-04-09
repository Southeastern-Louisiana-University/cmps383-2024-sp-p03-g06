namespace Selu383.SP24.Api.Features.Hotels
{
    public class Room
    {
        public int Id { get; set; }
        public bool Availability { get; set; }
        public int? HotelId { get; set; }
        public int? RoomTypeId { get; set; }
        public string? Beds {  get; set; }
        public virtual Hotel? Hotel { get; set; }
        public virtual RoomType? RoomType { get; set; }
        public virtual ICollection<Reservation>? Reservations { get; set; }
    }
}

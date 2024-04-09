﻿namespace Selu383.SP24.Api.Features.Hotels
{
    public class ReservationDto
    {
        public int Id { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int ReservationNumber { get; set; }
        public string? HotelName { get; set; }
        public int RoomId { get; set; }
        public int UserId { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selu383.SP24.Api.Data;
using Selu383.SP24.Api.Features.Hotels;

using System.Linq;

namespace Selu383.SP24.Api.Controllers
{
    [Route("api/roomType")]
    [ApiController]
    public class RoomTypeController : ControllerBase
    {
        private readonly DbSet<RoomType> roomType;
        private readonly DataContext dataContext;

        public RoomTypeController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            roomType = dataContext.Set<RoomType>();
        }

        [HttpGet]
        public IQueryable<RoomTypeDto> GetAllRooms()
        {
            return GetRoomDtos(roomType);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<RoomTypeDto> GetRoomById(int id)
        {
            var result = GetRoomDtos(roomType.Where(x => x.Id == id)).FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("byhotel/{hotelId}")]
        public ActionResult<IQueryable<RoomTypeDto>> GetRoomsByHotel(int hotelId)
        {
            var hotelRooms = roomType.Where(x => x.HotelId == hotelId);
            if (!hotelRooms.Any())
            {
                return NotFound();
            }

            return Ok(GetRoomDtos(hotelRooms));
        }

        private IQueryable<RoomTypeDto> GetRoomDtos(IQueryable<RoomType> roomType)
        {
#pragma warning disable CS8601 // Possible null reference assignment.
            return roomType
                .Select(x => new RoomTypeDto
                {
                    Id = x.Id,
                    Name = x.Name,
                    NumberofBeds = x.NumberOfBeds,
                    Rooms = x.Rooms,


                });
#pragma warning restore CS8601 // Possible null reference assignment.
        }
    }
}

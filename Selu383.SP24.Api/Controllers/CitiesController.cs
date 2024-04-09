using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Selu383.SP24.Api.Data;
using Selu383.SP24.Api.Features.Hotels;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;


namespace Selu383.SP24.Api.Controllers;

[Route("api/cities")]
[ApiController]
public class CitiesController : ControllerBase
{
    private readonly DbSet<City> cities;
    private readonly DataContext dataContext;

#pragma warning disable IDE0079 // Remove unnecessary suppression
#pragma warning disable IDE0290 // Use primary constructor
    public CitiesController(DataContext dataContext)
#pragma warning restore IDE0079 // Remove unnecessary suppression
    {
        this.dataContext = dataContext;
        cities = dataContext.Set<City>();
    }

    [HttpGet]
    public IQueryable<CityDto> GetAllCities() {
        return GetCityDtos(cities);
    }

    [HttpGet]
    [Route("{id}")]
    public ActionResult<CityDto> GetCityById(int id)
    {
        var result = GetCityDtos(cities.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    public ActionResult<CityDto> CreateCity(CityDto dto)
    {

        if (string.IsNullOrWhiteSpace(dto.Location) || dto.Location.Length > 100)
        {
            return BadRequest();
        }

        var city = new City
        {
            Id = dto.Id,
            Location = dto.Location,
        };
        cities.Add(city);

        dataContext.SaveChanges();

        dto.Id = city.Id;

        return CreatedAtAction(nameof(GetCityById), new { id = dto.Id }, dto);
    }

    [HttpPost("find")]
    public IQueryable<CityDto> FindCities(FindCityDto findCityDto)
    {
        var terms = findCityDto?.SearchTerm?.Split(" ", StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        var filtered = cities
            .Where(x => terms!.Any(y => x.Location!.Contains(y)));

        return GetCityDtos(filtered);
    }


    private static IQueryable<CityDto> GetCityDtos(IQueryable<City> cities)
    {
        return cities
            .Select(x => new CityDto
            {
                Id = x.Id,
                Location = x.Location,
            });
    }


}

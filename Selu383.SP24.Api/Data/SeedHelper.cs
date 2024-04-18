using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Selu383.SP24.Api.Features.Authorization;
using Selu383.SP24.Api.Features.Hotels;

namespace Selu383.SP24.Api.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);
        await AddCities(dataContext);
        await AddHotels(dataContext);
        await AddRooms(dataContext);
        await AddRoomTypes(dataContext);

        //dataContext.SaveChanges();
        
    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddCities(DataContext dataContext)
    {
        var cities = dataContext.Set<City>();

        if (await cities.AnyAsync())
        {
            return;
        }

        dataContext.Set<City>().Add(new City
        {
            Location = "New Orleans"
        });

        

        await dataContext.SaveChangesAsync();
    }

    private static async Task AddHotels(DataContext dataContext)
    {
        var hotels = dataContext.Set<Hotel>();
        var cities = await dataContext.Set<City>().ToListAsync();

        if ( await hotels.AnyAsync())
        {
            return;
        }

        /*var hotelsToSeed = new List<Hotel>()
        {
           new()
           {
                Name = "EnStay New Orleans I",
                Address = "225 Baronne St, New Orleans, LA 70112",
                //CityId = cities[1].Id,
                CityId = dataContext.Set<City>().Find(2).Id,
                //City = dataContext.Set<City>().Find(2)
           },

           new()
           {
               Name = "EnStay New Orleans II",
               Address = "405 Esplanade Ave, New Orleans, LA 70116",
               CityId = cities[1].Id,
               //CityId = dataContext.Set<City>().Find(2).Id,
               //City = dataContext.Set<City>().Find(2),
           },

            new()
            {
               Name = "EnStay Baton Rouge",
               Address = "200 Convention St, Baton Rouge, LA 70801",
               CityId = cities[0].Id,
               //CityId = dataContext.Set<City>().Find(1).Id,
               //City = dataContext.Set<City>().Find(1),
            }
       };*/

        //dataContext.Set<Hotel>().AddRange(hotelsToSeed);

       /*dataContext.Set<Hotel>()
            .Add(new Hotel
            {
                Name = "EnStay New Orleans I",
                Address = "225 Baronne St, New Orleans, LA 70112",
                CityId = cities[1].Id,
                City = cities[1],
            });

        dataContext.Set<Hotel>()
           .Add(new Hotel
           {
               Name = "EnStay New Orleans II",
               Address = "405 Esplanade Ave, New Orleans, LA 70116",
               CityId = cities[1].Id,
               City = cities[1]
           });

        dataContext.Set<Hotel>()
           .Add(new Hotel
           {
               Name = "EnStay Baton Rouge",
               Address = "200 Convention St, Baton Rouge, LA 70801",
               CityId = cities[0].Id,
               City = cities[0],
           });*/
        dataContext.SaveChanges();

        //await dataContext.SaveChangesAsync();
    }

    private static async Task AddRoomTypes(DataContext dataContext)
    {
        var roomTypes = dataContext.Set<RoomType>();

        if (await roomTypes.AnyAsync())
        {
            return;
        }

        /*dataContext.Set<RoomType>().Add(new RoomType
        {
            Name = "king",
            NumberOfBeds = 1,
            HotelId = 11,
        });*/



        await dataContext.SaveChangesAsync();
    }

    private static async Task AddRooms(DataContext dataContext)
    {
        var rooms = dataContext.Set<Room>();

        /*if (await rooms.AnyAsync())
        {
            return;
        }

        dataContext.Set<Room>().Add(new Room
        {
            Availability = true,
            Beds = "1",
            HotelId = 11,
        });*/



        await dataContext.SaveChangesAsync();
    }



}



using System.ComponentModel.DataAnnotations;

namespace Selu383.SP24.Api.Features.Authorization;

public class CreateUserDto
{
    [Required]
    public string UserName { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    [Required, MinLength(1)]
#pragma warning disable IDE0301 // Simplify collection initialization
    public string[] Roles { get; set; } = Array.Empty<string>();
#pragma warning restore IDE0301 // Simplify collection initialization
}
namespace Selu383.SP24.Api.Features.Authorization;

public class UserDto
{
    public int Id { get; set; }
    public string UserName { get; set; } = string.Empty;
#pragma warning disable IDE0301 // Simplify collection initialization
    public string[] Roles { get; set; } = Array.Empty<string>();
#pragma warning restore IDE0301 // Simplify collection initialization
}
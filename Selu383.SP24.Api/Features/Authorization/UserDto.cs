namespace Selu383.SP24.Api.Features.Authorization;

public class UserDto
{
    public int Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string? Password { get; set; }

    public string[] Roles { get; set; } = Array.Empty<string>();
}
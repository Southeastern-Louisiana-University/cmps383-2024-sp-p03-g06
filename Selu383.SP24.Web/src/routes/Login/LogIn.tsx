import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserDto {
  username?: string;
  id?: number;
}

export function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserDto | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetch("/api/authentication/me")
      .then(async (response) => {
        if (response.ok) {
          const userResp = await response.json();
          setUser(userResp);
        }
      });
  }, []);

  function handleUserNameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("/api/authentication/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const userResp = await response.json();
      setUser(userResp);
      navigate("/"); // Redirect user to the home page
    } else {
      // Handle error - show error message or take appropriate action
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={handleUserNameChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Log In</button>
        </form>
      </div>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
          {/* Additional user-related UI can go here */}
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
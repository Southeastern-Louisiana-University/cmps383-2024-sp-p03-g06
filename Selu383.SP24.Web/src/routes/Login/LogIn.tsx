import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "use-http";
import AuthContext from "../../features/AuthContext";

export default function Login () {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("galkadi");
  const [password, setPassword] = useState("Password123!");
  const [error, setError] = useState("");
  

  const authContext = useContext(AuthContext);

  const { loading, post } = useFetch("/api/authentication/login", {
    method: "post",
    onNewData: (_, x) => {
      if (typeof x === "string") {
        setError(x);
      } else if (typeof x === "object") {
        console.log("we logged in as: ");
        console.log(x);
        authContext?.setUser(x);
        navigate("/");
        // TODO: save in context and redirect to home page
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="UserName"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loading ? "Checking Login..." : null}
      {error ? error : null}

            <Button fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} type="submit" disabled={loading}>
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/registration">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
    </form>
  )
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stops the browser from causing a page refresh - more on this in the lecture

    if (loading) {
      return;
    }

    post({
      userName: userName,
      password: password,
    });
    
}
}
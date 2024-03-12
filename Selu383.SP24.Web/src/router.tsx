
import { createBrowserRouter } from "react-router-dom";
import App from "./routes/HomePage/HomePage";
import Reservations from "./routes/Reservations/reservations";
import  Login  from "./routes/Login/Login";
import MainLayout from "./features/shared/mainLayout/MainLayout";
import Register from "./routes/Register/Register";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

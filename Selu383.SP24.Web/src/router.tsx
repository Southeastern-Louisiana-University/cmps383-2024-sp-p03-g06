import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./routes/HomePage/HomePage";
import Reservations from "./routes/Reservations/reservations";
import { LogIn } from "./routes/Login/LogIn";
import MainLayout from "./features/shared/mainLayout/MainLayout";
import HotelDetails from "./routes/AllThingsHotel/HotelDetails";

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
      {
        path: "HotelDetails",
        element: <HotelDetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
]);

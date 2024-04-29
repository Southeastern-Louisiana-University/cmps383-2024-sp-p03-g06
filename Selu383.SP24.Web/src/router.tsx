import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./features/shared/mainLayout/MainLayout";
import CitySearch from "./features/shared/CitySearch";
import HomePage from "./routes/HomePage/HomePage";
import HotelDetail from "./routes/HotelDetails/HotelDetail";
import LogIn from "./routes/Login/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [],
      },
      {
        path: "/find-city",
        element: <CitySearch />,
      },
      {
        path: "/hotel-details/:id",
        element: <HotelDetail />,
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
]);
export default router;

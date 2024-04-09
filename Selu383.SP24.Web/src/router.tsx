
import { createBrowserRouter } from "react-router-dom";
import { LogIn } from "./routes/Login/LogIn";
import MainLayout from "./features/shared/mainLayout/MainLayout";
import Reservations from "./routes/Reservations/reservations";
import CitySearch from "./features/shared/CitySearch";
import HomePage from "./routes/HomePage/HomePage";
import HotelDetail from "./routes/HotelDetails/HotelDetail";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children:[
          
        ],
      },
      {
        path: "/find-city",
        element: <CitySearch />
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },

      {
        path:"/hotel-details/:id",
        element: <HotelDetail/>
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
]);
export default router
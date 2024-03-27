
import { createBrowserRouter } from "react-router-dom";
import App from "./routes/HomePage/HomePage";

import { LogIn } from "./routes/Login/LogIn";
import MainLayout from "./features/shared/mainLayout/MainLayout";
import Reservations from "./routes/Reservations/reservations";
import CitySearch from "./features/shared/CitySearch";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
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
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
]);
export default router
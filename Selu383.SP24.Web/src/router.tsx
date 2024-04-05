import { createBrowserRouter } from "react-router-dom";
import App from "./routes/HomePage/HomePage";

import { LogIn } from "./routes/Login/LogIn";
import MainLayout from "./features/shared/mainLayout/MainLayout";
import Reservations from "./routes/Reservations/reservations";
import ListHotels from "./routes/Hotel/List-Hotels.tsx";

const router = createBrowserRouter([
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
        path: "/hotels",
        element: <ListHotels />,
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />,
  },
]);
export default router;

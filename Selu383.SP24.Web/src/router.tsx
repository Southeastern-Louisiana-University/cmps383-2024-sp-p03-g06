import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './routes/App/App';
import Reservations from './routes/routes';
import { LogIn } from "./routes/LogIn";
import MainLayout from './features/shared/mainLayout/MainLayout';





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/reservations",
        element: <Reservations />
      },
    ],
  },

  {
    path: "/login",
    element: <LogIn />
  },
]);

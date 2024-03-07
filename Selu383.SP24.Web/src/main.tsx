import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Reservations, { LogIn } from './routes/routes';
import MainLayout from './mainLayout/MainLayout';
import { MantineProvider } from '@mantine/core';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: 
    [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/reservations",
        element: <Reservations/>
      },
      
    ],
  },

  {
    path: "/login",
    element: <LogIn/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Reservations from './routes/routes';
import { MainLayout } from './mainLayout/MainLayout';



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
    ]
  },

  

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)


import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import  router  from './router';
import '@mantine/carousel/styles.css';




ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { router } from './router';
import { Provider } from 'react-redux';
import store from './store';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import {RouterProvider,} from "react-router-dom";
import { router } from './router/router.tsx';
import { Provider } from 'react-redux';
import {store } from './store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>

      <PrimeReactContext.Provider value={{ ripple: true }}>
        <RouterProvider router={router} />
      </PrimeReactContext.Provider>
      </Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)

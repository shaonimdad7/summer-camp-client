import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)

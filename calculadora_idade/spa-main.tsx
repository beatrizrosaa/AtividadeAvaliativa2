import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/root';
import HomePage from './app/routes/home';
import CountdownRoute from './app/routes/countdown';
import './app/app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'countdown', element: <CountdownRoute /> }
    ]
  }
]);

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<RouterProvider router={router} />);
}

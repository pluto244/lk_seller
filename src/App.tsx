import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './01_app/providers/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

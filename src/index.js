import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExcercisesProvider from './context/ExcercisesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ExcercisesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ExcercisesProvider>
);
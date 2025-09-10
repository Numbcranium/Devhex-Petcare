import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/Layout.css';
import { VetProvider } from './context/VetContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VetProvider>
      <App />
    </VetProvider>
  </React.StrictMode>
);

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import component chính của bạn

// Sử dụng createRoot để tương thích với React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
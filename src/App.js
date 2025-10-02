// src/App.js
import React from 'react';
// Phải import AppRouter đã định nghĩa các Route
import AppRouter from '../src/AppRouter'; 

function App() {
  return (
    <div className="App">
      {/* Chỉ cần gọi AppRouter component */}
      <AppRouter /> 
    </div>
  );
}

export default App;

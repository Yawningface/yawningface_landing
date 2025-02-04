import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#101827] p-6">
      

      <Routes>
        <Route path="/" element={<Landing />} />

      </Routes>
    </div>
  );
}

export default App;

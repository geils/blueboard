import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sigin from './Sigin';
import Profile from './Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Sigin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

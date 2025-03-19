import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './pages/Counter';
import PasswordGenerator from './pages/PasswordGenerator';
import CurrencyConverter from './pages/CurrencyConverter'; 
import BackgroundChanger from './pages/BackgroundChanger';
import GithubSearch from './pages/GithubSearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div 
        className="text-center p-4 bg-gray-800 text-white shadow-md mx-auto bg-cover bg-center min-h-screen" 
        style={{ backgroundImage: "url('your-image-url.jpg')" }}
      >
        <Navbar />
        <Routes>
          {/* Default Route Redirecting to GitHub Search */}
          <Route path="/" element={<Navigate to="/github-search" replace />} />
          
          <Route path="/counter" element={<Counter />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} /> 
          <Route path="/background-changer" element={<BackgroundChanger />} />
          <Route path="/github-search" element={<GithubSearch />} />
        </Routes>
        <p className="mt-2">Made by Krishna Mehta <br /> ❤️</p>
      </div>
    </Router>
  );
}

export default App;

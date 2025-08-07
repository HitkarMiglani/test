import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Experience from './pages/Experience';
import Login from './pages/Login';
import Rooms from './pages/Rooms';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const isLoginPath = useLocation().pathname === "/login";

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {!isOwnerPath && !isLoginPath && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;

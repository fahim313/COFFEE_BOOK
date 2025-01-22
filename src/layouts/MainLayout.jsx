import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Dynamic Content */}
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}


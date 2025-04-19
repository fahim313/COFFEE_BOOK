import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
  
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Dynamic Content */}
      <div className="min-h-[calc(100vh-290px)] container mx-auto px-12">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}





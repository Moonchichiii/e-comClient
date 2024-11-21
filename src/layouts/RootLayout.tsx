import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-[1920px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

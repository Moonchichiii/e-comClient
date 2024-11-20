import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
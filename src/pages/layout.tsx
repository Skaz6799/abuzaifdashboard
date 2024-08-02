import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from '@/components/navigations/navbar';
import Sidebar from '@/components/navigations/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
          <Navbar />
          <Sidebar />
          <main>{children}</main>
    </>
  );
};

export default Layout;

import React from 'react';
import Sidenav from './component/sidenav'; // Change to PascalCase for components

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <main className="flex-grow bg-gray-100 p-4">
        <Sidenav /> {/* Use PascalCase for components */}
        {children}
      </main>
    </div>
  );
};

export default Layout;

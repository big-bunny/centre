import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
   
      <div className="min-h-screen bg-cover bg-green-800">
        <Header />
        <div className="container mx-auto py-40">{children}</div>
        <Footer />
      </div>
   
  );
};

export default DefaultLayout;
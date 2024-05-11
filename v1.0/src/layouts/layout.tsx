
// RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="bg-green-900 w-full overflow-x-hidden">
      <Header />
      <main className="backdrop-blur-2xl relative z-10">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
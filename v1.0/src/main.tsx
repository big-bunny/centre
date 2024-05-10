import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx'; // Assuming App component as the main entry
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import Team from './pages/team.tsx';
import Gallery from './pages/gallery.tsx';
import Child from './pages/child.tsx';
import SponsorProgram from './pages/program.tsx';
import DonationPage from './pages/donate.tsx';
import RootLayout from './layouts/layout.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const rootElement = document.getElementById('root');
if (rootElement) { // Handle potential missing root element gracefully
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <RootLayout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/child" element={<Child />} />
              <Route path="/program" element={<SponsorProgram />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/redirect" element={<Navigate to="/" />} />
            </Routes>
          </RootLayout>
        </Router>
      </ClerkProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find root element with ID "root"');
}

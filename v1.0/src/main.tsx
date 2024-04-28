import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/home.tsx'; // Assuming the Home component is in a file named Home.tsx
import About from './pages/about.tsx'; // Assuming the About component is in a file named About.tsx
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redirect" element={<Navigate to="/home" />} /> {/* Redirect route */}
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

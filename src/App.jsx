import React, { useState, useEffect } from 'react';
import logo from '/eh-logo.jpg';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import DateDisplay from './components/DateDisplay';
import Loader from './components/Loader';

const launchDateMs = new Date('2025-01-15T00:00:00').getTime(); // Launch date in milliseconds
const launchDateSeconds = launchDateMs / 1000; // Convert to seconds for the CountdownTimer

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the total loading time as needed (5 seconds here)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('./spotlight.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Main Container */}
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header Component */}
          <Header logo={logo} />

          {/* Countdown Timer */}
          <CountdownTimer launchDate={launchDateSeconds} />

          {/* Launch Date Display */}
          <DateDisplay launchDate={launchDateMs} />

          {/* Social Links */}
          <SocialLinks />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

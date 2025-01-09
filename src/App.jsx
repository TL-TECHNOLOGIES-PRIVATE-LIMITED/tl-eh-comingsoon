import React from 'react';
import logo from '/eh-logo.jpg';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { format } from 'date-fns';
import DateDisplay from './components/DateDisplay';

const launchDateMs = new Date('2025-01-15T00:00:00').getTime();

// launchDate in seconds for CountdownTimer
const launchDateSeconds = launchDateMs / 1000;

export default function App() {
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
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
          <Header logo={logo} />
          <CountdownTimer launchDate={launchDateSeconds} />
          <DateDisplay launchDate={launchDateMs} />;
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from '/eh-logo.jpg';
import { FaWhatsapp } from "react-icons/fa6";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

// Set launch date (Example: January 15, 2025)
const launchDate = new Date('2025-01-15T00:00:00').getTime() / 1000;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const TimerBlock = ({ value, dimension, color }) => (
  <div className="flex flex-col items-center p-4">
    <div
      className="text-2xl md:text-3xl font-extrabold mb-2"
      style={{ color }}
    >
      {value}
    </div>
    <div className="text-sm md:text-md text-gray-300">
      {dimension}
    </div>
  </div>
);

export default function App() {
  const startTime = Date.now() / 1000; // Current time in seconds
  const remainingTime = launchDate - startTime; // Time remaining until launch
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  // Responsive timer props
  const getTimerProps = (size) => ({
    isPlaying: true,
    size,
    strokeWidth: size * 0.08,
    trailStrokeWidth: size * 0.06,
    strokeLinecap: 'round',
    rotation: 'clockwise',
    isGrowing: false,
    trailColor: '#333333',
    isSmoothColorTransition: true,
  });

  // Use React hooks for responsive design
  const [timerSize, setTimerSize] = React.useState(180);

  // Update timer size based on window width
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setTimerSize(100);
      } else if (width < 768) {
        setTimerSize(130);
      } else {
        setTimerSize(150);
      }
    };

    handleResize(); // Initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header Section with Logo */}
          <div className="text-center mb-12">
            <img src={logo} alt="EveryHome Logo" className="w-24 h-auto mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              We're Coming Soon!
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
              Simplify Your Life with EveryHome
            </p>
          </div>

          {/* Countdown Section */}
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 mb-10">
            <CountdownCircleTimer
              {...getTimerProps(timerSize)}
              colors={["#6366f1", "#4f46e5"]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <TimerBlock
                  value={getTimeDays(daysDuration - elapsedTime)}
                  dimension="DAYS"
                  color={color}
                />
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              {...getTimerProps(timerSize)}
              colors={["#8b5cf6", "#7c3aed"]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <TimerBlock
                  value={getTimeHours(daySeconds - elapsedTime)}
                  dimension="HOURS"
                  color={color}
                />
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              {...getTimerProps(timerSize)}
              colors={["#ec4899", "#f43f5e"]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
              })}
            >
              {({ elapsedTime, color }) => (
                <TimerBlock
                  value={getTimeMinutes(hourSeconds - elapsedTime)}
                  dimension="MINUTES"
                  color={color}
                />
              )}
            </CountdownCircleTimer>

            <CountdownCircleTimer
              {...getTimerProps(timerSize)}
              colors={["#f43f5e", "#e11d48"]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0
              })}
            >
              {({ elapsedTime, color }) => (
                <TimerBlock
                  value={getTimeSeconds(elapsedTime)}
                  dimension="SECONDS"
                  color={color}
                />
              )}
            </CountdownCircleTimer>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/tltechnologiespvtltd/" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaInstagram className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/tltechnologiespvtltd/" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaFacebookF className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/company/tltechnologiespvtltd/" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaLinkedinIn className="w-8 h-8" />
              </a>
              <a  target='_blank' href="https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected with us on social media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

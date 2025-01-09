import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TimerBlock } from './TimerBlock';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export const CountdownTimer = ({ launchDate }) => {
  const [timerSize, setTimerSize] = React.useState(180);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setTimerSize(100);
      else if (width < 768) setTimerSize(130);
      else setTimerSize(150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const startTime = Date.now() / 1000;
  const remainingTime = launchDate - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
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
  );
};
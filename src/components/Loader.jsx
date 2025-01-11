import React, { useState, useEffect } from 'react';
import logo from '/eh-logo-new.png';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate progress increment
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2; // Adjust increment speed here
            });
        }, 50); // Adjust interval speed here (50ms)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            {/* Logo with a fade-in animation */}
            <img
                src={logo}
                alt="EveryHome Logo"
                style={{
                    width: '130px', // Custom width for logo
                    height: '130px', // Custom height for logo
                    marginBottom: '1.5rem', // Margin below the logo
                    borderRadius: '12px', // Rounded corners for a modern look

                }}
            />

            {/* Loading bar container */}
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                {/* Loading bar progress */}
                <div
                    className="h-full bg-blue-500 transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Loading percentage */}
            <p className="text-gray-700 text-lg font-semibold">{progress}%</p>
        </div>
    );
};

export default Loader;

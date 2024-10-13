import React, { useState, useEffect } from 'react';
import Load from '../components/load';
import Info from '../components/info'
import BackgroundAnimation from '../components/background';

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay (e.g., data fetching)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Change the delay as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Load />;
    }
    return(
        <div className="min-h-screen w-full relative z-0 pt-[4rem]">
        <BackgroundAnimation/>
        <Info/>
        </div>
    )
};
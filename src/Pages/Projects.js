import Project from '../components/projects'
import React, { useState, useEffect } from 'react';
import Load from '../components/load';
import BackgroundAnimation from '../components/background';


export default function Projectpage() {
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
        <div className="h-full w-full relative z-0">
        <BackgroundAnimation/>

        <Project/>
        </div>
    )
};

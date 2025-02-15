import React, { useEffect, useRef, useState } from 'react';
import './Sponsorship.css'; // Link the CSS file

import image1 from '../../assets/sponsor/Grid 1.png'; // Replace with your image path
import image2 from '../../assets/sponsor/Grid 2.png'; // Replace with your image path

const Sponsorship = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the component
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when component is in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className={`sponsorship-container ${isVisible ? 'fade-in' : ''}`} ref={componentRef}>
      {/* Heading */}
      <h1 className="sponsorship-heading">Sponsorship Available</h1>

      {/* Container Grid */}
      <div className="sponsorship-grid">
        {/* Container 1 */}
        <div className="sponsorship-card">
          <img src={image1} alt="Sponsorship 1" className="sponsorship-image" />
          <button className="donate-button">Donate Now</button>
        </div>

        {/* Container 2 */}
        <div className="sponsorship-card">
          <img src={image2} alt="Sponsorship 2" className="sponsorship-image" />
          <button className="donate-button">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
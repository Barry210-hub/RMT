import React, { useEffect, useState } from 'react';
import './Hero.css'; // Ensure to link your styles here
import ban from '../../assets/ban.jpg'
const Hero = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({
    freeTreatment: 0,
    bloodDonation: 0,
    hvc: 0,
    freeFood: 0,
    registeredPatients: 0,
  });

  // Function to check if the section is in view
  const handleScroll = () => {
    const heroSection = document.getElementById('hero-section');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      const targets = {
        freeTreatment: 400,
        bloodDonation: 300,
        hvc: 400,
        freeFood: 900,
        registeredPatients: 8000,
      };

      let interval;
      const newCounts = { ...counts };

      Object.keys(targets).forEach((key) => {
        let current = 0;
        interval = setInterval(() => {
          if (current < targets[key]) {
            current += Math.ceil(targets[key] / 100); // Adjust this for smoother counting
            newCounts[key] = current;
            setCounts({ ...newCounts });
          } else {
            clearInterval(interval);
          }
        }, 30);
      });
    }
  }, [inView]);

  return (
    <div className="hero-section" id="hero-section">
      <div className="counter-container">
        <div className="pre_container">
   <img src={ban} alt="" />
        </div>
        <div className="pre-post-container">

          <div className="counter-item">
            <h3>Free Treatment of Patients</h3>
            <h2 className={`counter-text ${inView ? 'in-view' : ''}`}>{counts.freeTreatment}</h2>
          </div>
          <div className="counter-item">
            <h3>Blood Donation for Purpose</h3>
            <h2 className={`counter-text ${inView ? 'in-view' : ''}`}>{counts.bloodDonation}</h2>
          </div>
          <div className="counter-item">
            <h3>HVC</h3>
            <h2 className={`counter-text ${inView ? 'in-view' : ''}`}>{counts.hvc}</h2>
          </div>
          <div className="counter-item">
            <h3>Free Food for Community</h3>
            <h2 className={`counter-text ${inView ? 'in-view' : ''}`}>{counts.freeFood}</h2>
          </div>
          <div className="counter-item">
            <h3>Registered Patients</h3>
            <h2 className={`counter-text ${inView ? 'in-view' : ''}`}>{counts.registeredPatients}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

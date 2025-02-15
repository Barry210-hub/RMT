// import React from "react";
// import "./Footer.css"; // CSS file for styling

// const Footer = () => {
//   return (
//     <div>
//       {/* Map Section */}
//       <div className="map-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3400.131867338868!2d74.27583729345156!3d31.547995465376427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919033240a00b33%3A0x61d06388dd90a9b7!2sFoot%20Ball%20Ground!5e0!3m2!1sen!2sus!4v1739377141272!5m2!1sen!2sus"
//           width="100%"
//           height="300"
//           frameBorder="0"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           aria-hidden="false"
//           tabIndex="0"
//         ></iframe>
//       </div>

//       {/* Footer Section */}
//       <footer>
//         <div className="footer-container">
//           {/* Appeals Section */}
//           <div className="footer-section">
//             <h4>Appeals</h4>
//             <ul>
//               <li><a href="#">Blood Donation</a></li>
//               <li><a href="#">Organ Donation</a></li>
//               <li><a href="#">Help for Cancer Patients</a></li>
//               <li><a href="#">Support for Emergency Care</a></li>
//             </ul>
//           </div>

//           {/* Quick Links Section */}
//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Services</a></li>
//               <li><a href="#">FAQ</a></li>
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div className="footer-section">
//             <h4>Contact Us</h4>
//             <ul>
//               <li>Phone: (123) 456-7890</li>
//               <li>Email: info@hospital.com</li>
//               <li>Address: 123 Hospital St., City, Country</li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="footer-bottom">
//           <p>&copy; 2025 Hospital Name. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import React, { useEffect, useRef, useState } from 'react';
import './Footer.css'; // CSS file for styling

import FaFacebook from '../../assets/icons/face.png'; // Import image files
import FaTwitter from '../../assets/icons/tweeter.png';
import FaInstagram from '../../assets/icons/insta.png';
import FaLinkedin from '../../assets/icons/linkend.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the footer
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when footer is in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div ref={footerRef}>
      {/* Map Section */}
      <div className={`map-container ${isVisible ? 'fade-in' : ''}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3400.131867338868!2d74.27583729345156!3d31.547995465376427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919033240a00b33%3A0x61d06388dd90a9b7!2sFoot%20Ball%20Ground!5e0!3m2!1sen!2sus!4v1739377141272!5m2!1sen!2sus"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className={`footer ${isVisible ? 'fade-in' : ''}`}>
        <div className="footer-container">
          {/* Appeals Section */}
          <div className="footer-section">
            <h4>Appeals</h4>
            <ul>
              <li><a href="#">Blood Donation</a></li>
              <li><a href="#">Organ Donation</a></li>
              <li><a href="#">Help for Cancer Patients</a></li>
              <li><a href="#">Support for Emergency Care</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@hospital.com</li>
              <li>Address: 123 Hospital St., City, Country</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-media">
              <a href="#" className="social-icon">
              <img src={FaFacebook} alt="Facebook" style={{ width: '34px' }} />

              </a>
              <a href="#" className="social-icon">
                <img src={FaTwitter} alt="Twitter" />
              </a>
              <a href="#" className="social-icon">
                <img src={FaInstagram} alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src={FaLinkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Hospital Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
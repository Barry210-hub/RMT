import React from 'react';
import './Bannertwo.css';
import bantwo from '../../assets/Banner 3.png';
import { motion } from 'framer-motion';

const Bannertwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
      className='image-con'
    >
      <img src={bantwo} alt="Banner" className="banner-image" />
    </motion.div>
  );
};

export default Bannertwo;
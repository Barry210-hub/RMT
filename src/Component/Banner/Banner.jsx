// import React from 'react'
// import './Banner.css'
// import banner from '../../assets/fullBanner.jpg'
// import nadeem from '../../assets/nadeem baig.png'
// import slogen from '../../assets/slogan.png'
// const Banner = () => {
//   return (
//     // <div className='banner-main'>
//     //   <img className='slogen'  src={slogen}alt="" />
//     //   <img className='banner' src={nadeem} alt="" />
//     // </div>
//     <div className="banner-main">
//         <img src={banner} alt="" className="banner-img" />
//     </div>
//   )
// }

// export default Banner



// import React, { useState, useEffect } from 'react';
// import './Banner.css';
// import banner from '../../assets/fullBanner.jpg';
// import nadeem from '../../assets/nadeem baig.png';
// import slogen from '../../assets/slogan.png';
// import ban from '../../assets/Banner 1.png';
// import nadtwo from '../../assets/nadeem2.jpeg'
// import nadthree from '../../assets/nadeem3.jpeg'

// const Banner = () => {
//   // Array of images for changing
//   const images = [ban , banner , nadtwo , nadthree];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, []);

//   return (
//     <div className="banner-main">
//       <img src={images[currentImageIndex]} alt="Banner" className="banner-img" />
//     </div>
//   );
// };

// export default Banner;




import React, { useState, useEffect } from 'react';
import './Banner.css';
import banner from '../../assets/fullBanner.jpg';
import nadeem from '../../assets/nadeem baig.png';
import slogen from '../../assets/slogan.png';
import ban from '../../assets/Banner 1.png';
import nadtwo from '../../assets/nadeem2.jpeg';
import nadthree from '../../assets/nadeem3.jpeg';

const Banner = () => {
  // Array of images for changing
  const images = [ban, banner, nadtwo, nadthree];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="banner-main">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Banner"
          className={`banner-img ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Banner;

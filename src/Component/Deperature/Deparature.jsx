// import React, { useEffect, useRef, useState } from 'react';
// import './Departure.css';  // Link the CSS file

// import image1 from '../../assets/Departments Icons/1.png';
// import image2 from '../../assets/Departments Icons/2.png';
// import image3 from '../../assets/Departments Icons/3.png';
// import image4 from '../../assets/Departments Icons/4.png';
// import image5 from '../../assets/Departments Icons/5.png';
// import image6 from '../../assets/Departments Icons/6.png';
// import image7 from '../../assets/Departments Icons/7.png';
// import image8 from '../../assets/Departments Icons/8.png';

// const data = [
//   { image: image1, name: 'CARDIOLOGY', description: 'The ervice include echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image2, name: 'Name 2', description: 'Description 2' },
//   { image: image3, name: 'Name 3', description: 'Description 3' },
//   { image: image4, name: 'Name 4', description: 'Description 4' },
//   { image: image5, name: 'Name 5', description: 'Description 5' },
//   { image: image6, name: 'Name 6', description: 'Description 6' },
//   { image: image7, name: 'Name 7', description: 'Description 7' },
//   { image: image8, name: 'Name 8', description: 'Description 8' },
// ];
// const Deparature = () => {
//   const [visible, setVisible] = useState(new Array(data.length).fill(false)); // Track visibility of each container
//   const containerRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//           setVisible((prev) => {
//             const updatedVisible = [...prev];
//             updatedVisible[index] = true;
//             return updatedVisible;
//           });
//         }
//       });
//     }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

//     // Observe eac container
//     containerRefs.current.forEach((el) => observer.observe(el));

//     return () => {
//       observer.disconnect(); // Clean up observer on component unmount
//     };
//   }, []);

//   return (
//     <div className="container-grid">
//       {data.map((item, index) => (
//         <div 
//           className={`container ${visible[index] ? 'fade-in' : ''}`}
//           key={index}
//           ref={(el) => containerRefs.current[index] = el}  // Assign each ref
//         >
//           <div className="circle-img">
//             <img src={item.image} alt={item.name} className="image" />
//           </div>
//           <div className="outline">

//           <div className="name">{item.name}</div>
//           <div className="line"></div>
//           <div className="description">{item.description}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Deparature;

// import React, { useEffect, useRef, useState } from 'react';
// import './Departure.css';  // Link the CSS file

// import image1 from '../../assets/Departments Icons/1.png';
// import image2 from '../../assets/Departments Icons/2.png';
// import image3 from '../../assets/Departments Icons/3.png';
// import image4 from '../../assets/Departments Icons/4.png';
// import image5 from '../../assets/Departments Icons/5.png';
// import image6 from '../../assets/Departments Icons/6.png';
// import image7 from '../../assets/Departments Icons/7.png';
// import image8 from '../../assets/Departments Icons/8.png';

// const data = [
//   { image: image1, name: 'CARDIOLOGY', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image2, name: 'Name 2', description: 'Description 2' },
//   { image: image3, name: 'Name 3', description: 'Description 3' },
//   { image: image4, name: 'Name 4', description: 'Description 4' },
//   { image: image5, name: 'Name 5', description: 'Description 5' },
//   { image: image6, name: 'Name 6', description: 'Description 6' },
//   { image: image7, name: 'Name 7', description: 'Description 7' },
//   { image: image8, name: 'Name 8', description: 'Description 8' },
// ];

// const Departure = () => {
//   const [visible, setVisible] = useState(new Array(data.length).fill(false)); // Track visibility of each container
//   const containerRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//           setVisible((prev) => {
//             const updatedVisible = [...prev];
//             updatedVisible[index] = true;
//             return updatedVisible;
//           });
//         }
//       });
//     }, { threshold: 1 }); // Trigger when 50% of the element is visible

//     // Observe each container
//     containerRefs.current.forEach((el) => observer.observe(el));

//     return () => {
//       observer.disconnect(); // Clean up observer on component unmount
//     };
//   }, []);

//   return (
//     <div className="container-grid">
//       {data.map((item, index) => (
//         <div 
//           className={`container ${visible[index] ? 'fade-in' : ''}`}
//           key={index}
//           ref={(el) => containerRefs.current[index] = el}  // Assign each ref
//         >
//           <div className="circle-img">
//             <img src={item.image} alt={item.name} className="image" />
//           </div>
//           <div className="outline">
//             <div className="name">{item.name}</div>
//             <div className="line"></div>
//             <div className="description">{item.description}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Departure;

// import React, { useEffect, useRef, useState } from 'react';
// import './Departure.css';  // Link the CSS file

// import image1 from '../../assets/Departments Icons/1.png';
// import image2 from '../../assets/Departments Icons/2.png';
// import image3 from '../../assets/Departments Icons/3.png';
// import image4 from '../../assets/Departments Icons/4.png';
// import image5 from '../../assets/Departments Icons/5.png';
// import image6 from '../../assets/Departments Icons/6.png';
// import image7 from '../../assets/Departments Icons/7.png';
// import image8 from '../../assets/Departments Icons/8.png';

// const data = [
//   { image: image1, name: 'CARDIOLOGY', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image2, name: 'Name 2', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image3, name: 'Name 3', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image4, name: 'Name 4', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image5, name: 'Name 5', description: 'The service includes echocardiography(ECG) with Instant reporting along with stress' },
//   { image: image6, name: 'Name 6', description: 'Description 6' },
//   { image: image7, name: 'Name 7', description: 'Description 7' },
//   { image: image8, name: 'Name 8', description: 'Description 8' },
// ];

// const Departure = () => {
//   const [visible, setVisible] = useState(new Array(data.length).fill(false)); // Track visibility of each container
//   const containerRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         console.log(`Entry: ${index}, isIntersecting: ${entry.isIntersecting}`);
//         if (entry.isIntersecting) {
//           setVisible((prev) => {
//             const updatedVisible = [...prev];
//             updatedVisible[index] = true; // Mark current entry as visible
//             return updatedVisible;
//           });
//         }
//       });
//     }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

//     // Observe each container
//     containerRefs.current.forEach((el) => observer.observe(el));

//     return () => {
//       observer.disconnect(); // Clean up observer on component unmount
//     };
//   }, []);

//   return (
//     <div className="container-grid">
//       {data.map((item, index) => (
//         <div
//           className={`container ${visible[index] ? 'fade-in' : ''}`}
//           key={index}
//           ref={(el) => containerRefs.current[index] = el}  // Assign each ref
//         >
//           <div className="circle-img">
//             <img src={item.image} alt={item.name} className="image" />
//           </div>
//           <div className="outline">
//             <div className="name">{item.name}</div>
//             <div className="line"></div>
//             <div className="description">{item.description}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Departure;




import React, { useEffect, useRef, useState } from 'react';
import './Departure.css';

import image1 from '../../assets/Departments Icons/1.png';
import image2 from '../../assets/Departments Icons/2.png';
import image3 from '../../assets/Departments Icons/3.png';
import image4 from '../../assets/Departments Icons/4.png';
import image5 from '../../assets/Departments Icons/5.png';
import image6 from '../../assets/Departments Icons/6.png';
import image7 from '../../assets/Departments Icons/7.png';
import image8 from '../../assets/Departments Icons/8.png';
const data = [
  { 
    image: image1, 
    name: 'CARDIOLOGY', 
    description: 'The service includes echocardiography (ECG) with instant reporting along with stress tests.' 
  },
  { 
    image: image2, 
    name: 'NEUROLOGY', 
    description: 'Comprehensive care for disorders of the nervous system, including stroke and epilepsy.' 
  },
  { 
    image: image3, 
    name: 'ORTHOPEDICS', 
    description: 'Specialized treatment for bone and joint injuries, arthritis, and spinal conditions.' 
  },
  { 
    image: image4, 
    name: 'PEDIATRICS', 
    description: 'Dedicated to the health and well-being of infants, children, and adolescents.' 
  },
  { 
    image: image5, 
    name: 'DERMATOLOGY', 
    description: 'Expert care for skin conditions, including acne, eczema, and skin cancer.' 
  },
  { 
    image: image6, 
    name: 'ONCOLOGY', 
    description: 'Advanced treatment for cancer, including chemotherapy and radiation therapy.' 
  },
  { 
    image: image7, 
    name: 'GASTROENTEROLOGY', 
    description: 'Specialized care for digestive system disorders, including ulcers and liver disease.' 
  },
  { 
    image: image8, 
    name: 'OPHTHALMOLOGY', 
    description: 'Comprehensive eye care, including cataract surgery and vision correction.' 
  },
];

const Departure = () => {
  const [visible, setVisible] = useState(new Array(data.length).fill(false)); // Track visibility of each container
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = containerRefs.current.indexOf(entry.target); // Get the index of the observed element
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const updatedVisible = [...prev];
                updatedVisible[index] = true; // Mark current entry as visible
                return updatedVisible;
              });
            }, index * 300); // Delay each animation by 300ms
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' } // Adjust threshold and rootMargin
    );

    // Observe each container
    containerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <div className="container-grid">
      {data.map((item, index) => (
        <div
          className={`container ${visible[index] ? 'fade-in' : ''}`}
          key={index}
          ref={(el) => (containerRefs.current[index] = el)} // Assign each ref
        >
          <div className="circle-img">
            <img src={item.image} alt={item.name} className="image" />
          </div>
          <div className="outline">
            <div className="name">{item.name}</div>
            <div className="line"></div>
            <div className="description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Departure;
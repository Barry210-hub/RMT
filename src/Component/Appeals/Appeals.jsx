import React from 'react'
import './Apeals.css'
import thalesemia from '../../assets/2.png'
import thal from '../../assets/1.png'
import sponsor from '../../assets/8.webp'
import rooms from '../../assets/11.png'
import arrow from '../../assets/breadcrum_arrow.png'
import { useEffect } from 'react';



const Appeals = () => {


    useEffect(() => {
        // Select all the .item-list elements
        const items = document.querySelectorAll('.item-list');
    
        // Create the Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add 'in-view' class when the item is in the viewport
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stop observing once the item is in view
            }
          });
        }, {
          threshold: 0.5 // Trigger when 50% of the item is in the viewport
        });
    
        // Observe each item
        items.forEach(item => observer.observe(item));
      }, []);
    return (
        <div className='appeals' >
            <div className='app-heading' >

                <h2>CURRENT APPEALS</h2>
            </div>
        <hr />
            <div className="item-container">
                <div className="item-list">

                    <div className="item-hiding">
                        <p>DONATE FOR THALASSEMIA</p>
                    </div>
                    <div className="itemsec">

                        <div className="item-img">
                            <img src={thalesemia} alt="" />
                        </div>
                    </div>
                    <div className='apeal-btn' >
                        <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
                    </div>
                </div>

                <div className="item-list">

                    <div className="item-hiding">
                        <p>SPONSOR ROOM</p>
                    </div>
                    <div className="itemsec">

                        <div className="item-img">
                            <img src={rooms} alt="" />
                        </div>
                    </div>
                    <div className='apeal-btn' >
                        <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
                    </div>
                </div>

                <div className="item-list">

                    <div className="item-hiding">
                        <p>DONATE FOR THALASSEMIA</p>
                    </div>
                    <div className="itemsec">

                        <div className="item-img">
                            <img src={thal} alt="" />
                        </div>
                    </div>
                    <div className='apeal-btn' >
                        <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
                    </div>
                </div>

                <div className="item-list">

<div className="item-hiding">
    <p>SPONSOR ROOM</p>
</div>
<div className="itemsec">

    <div className="item-img">
        <img src={sponsor} alt="" />
    </div>
</div>
<div className='apeal-btn' >
    <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
</div>
</div>

<div className="item-list">

                    <div className="item-hiding">
                        <p>DONATE FOR THALASSEMIA</p>
                    </div>
                    <div className="itemsec">

                        <div className="item-img">
                            <img src={thalesemia} alt="" />
                        </div>
                    </div>
                    <div className='apeal-btn' >
                        <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
                    </div>
                </div>



                <div className="item-list">

                    <div className="item-hiding">
                        <p>DONATE FOR THALASSEMIA</p>
                    </div>
                    <div className="itemsec">

                        <div className="item-img">
                            <img src={thalesemia} alt="" />
                        </div>
                    </div>
                    <div className='apeal-btn' >
                        <button className='appeal-button' >DONATE NOW <img src={arrow} alt="" /></button>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default Appeals

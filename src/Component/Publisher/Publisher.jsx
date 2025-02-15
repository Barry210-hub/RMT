import React from 'react'
import './Publisher.css'
import logo1 from '../../assets/Partners Logos/1.png'
import logo2 from '../../assets/Partners Logos/2.png'
import logo3 from '../../assets/Partners Logos/3.png'
import logo4 from '../../assets/Partners Logos/4.png'
import logo5 from '../../assets/Partners Logos/5.png'
import logo6 from '../../assets/Partners Logos/6.png'
import logo7 from '../../assets/Partners Logos/7.png'
import logo8 from '../../assets/Partners Logos/8.png'
import logo9 from '../../assets/Partners Logos/9.png'
import logo10 from '../../assets/Partners Logos/10.png'
import logo11 from '../../assets/Partners Logos/11.png'
import logo12 from '../../assets/Partners Logos/12.png'

const Publisher = () => {
    return (
        <div className='publisher'>
            <div className='app-heading' >

                <h2>OUR PRODUCT DONARS</h2>
            </div>
            <hr />

            <div className="sponsor">

                <div class="carousel-container">
                    <div class="carousel">

                        <img src={logo1} />
                        <img src={logo2} alt="Logo 3" />
                        <img src={logo3} alt="Logo 4" />
                        <img src={logo4} alt="Logo 4" />
                        <img src={logo5} alt="Logo 4" />
                        <img src={logo6} alt="Logo 4" />
                        <img src={logo7} alt="Logo 4" />
                        <img src={logo8} alt="Logo 4" />
                        <img src={logo9} alt="Logo 4" />
                        <img src={logo10} alt="Logo 4" />
                        <img src={logo11} alt="Logo 4" />
                        <img src={logo12} alt="Logo 4" />

                    </div>
                </div>
            </div>

            <div className="spon">
                <img src="" alt="" />
            </div>

        </div>
    )
}

export default Publisher

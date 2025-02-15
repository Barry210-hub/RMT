import React from 'react'
import './Navbarpre.css'
import navbarfull from '../../assets/Full name.png'

const Navbarpre = () => {
  return (
    <div className='navbar' >
      <div className='list' > 
      <p>LOCATION</p>
      <p>CONTACT US</p>
      <p>BANK ACCOUNT</p>
      </div>

<div>

    <div className='logo' >
        <img src={navbarfull} alt="" />
    </div>

</div>

    </div>
  )
}

export default Navbarpre

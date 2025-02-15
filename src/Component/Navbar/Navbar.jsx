import React from 'react'
import './Navbar.css'
import drop from '../../assets/dropdown_icon.png'
const Navbar = () => {
  return (
    <div>
      <div className='navbar-real' >
        <ul className='list-navbar'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>OTHER WORD</li>
            <li>OUR DEPARTMENT            </li>
            <li>PUBLICATIONS</li>
            <li>PUBLICATION</li>
            <li>OTHER PROJECTS <img src={drop} alt="" />
            <ul className="dropdown">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    <li>Project 4</li>
                </ul>
            </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar

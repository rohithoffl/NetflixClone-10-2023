import React, { useEffect, useState } from 'react'
import  "./Nav.css"
import user from './92b4e7c57de1b5e1e8c5e883fd915450.jpg'
import logo from './Picsart_23-10-13_11-33-42-849.png'


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
      if (window.scrollY > 100) {
      handleShow(true);
      } else {
      handleShow(false);
      }
      };
      window.addEventListener("scroll", handleScroll);
      // Clean up the event listener when the component unmounts
      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
     }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src={logo}
      alt='Netflix Logo'
      />

      <img className='nav__avatar' src={user}
      alt='Netflix Logo'
      />
    </div>
  )
}

export default Nav

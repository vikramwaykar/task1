import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navBar'>
      <div className="logo"><img src='logo.png'/></div>
      <div className="rightNavBar">
        <div className='ExploreBtn'><h1>Explore<i class="ri-arrow-down-s-line"></i></h1></div>
        <div className='LuxVillaBtn'><h1>LUXURY VILLAS</h1></div>
        <div className='ListPropertyBtn'><h1>List Your Property</h1></div>
        <div className='ContactBtn'><i class="ri-phone-line"></i>+91 76666 57964</div>
        <div className='Icon'><i class="ri-notification-3-fill"></i><i class="ri-user-fill"></i></div>
       
      </div>
    </div>
  )
}

export default NavBar
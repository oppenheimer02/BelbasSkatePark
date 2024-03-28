import React from 'react';
import Logo from '../images/belbaslogo.jpg';

function About() {
  return (
    <div id='about' >
      
      <h1>About Us</h1>
      <h2>Belbas Skate Park</h2>

<div id='about-section' >


  <div className='about-text'>
<p>
Established in 2024, Belbas Skate Park has been the epicenter of skateboarding culture, fostering a tight-knit community and delivering thrilling experiences for enthusiasts of all ages. With two years of dedication, we've honed our facilities to perfection, ensuring both safety and excitement on every ride. Our vibrant park is more than just ramps and rails; it's a canvas for creativity, adorned with graffiti and murals that reflect our passion for skateboarding. Join us at Belbas Skate Park to elevate your skating skills, forge lifelong friendships, and immerse yourself in the exhilarating world of skateboarding.
</p>
  </div>
  <div className='about-image'> 
<img src={Logo} alt='abt'/ >
  </div>
</div>

    </div>
  )
}

export default About ;

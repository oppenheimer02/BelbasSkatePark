import React from 'react'
import ServiceBox from './ServiceBox';
import image1 from '../images/learn.jpg';
import image2 from '../images/shoes.jpg';
import image3 from '../images/skate-shoes.jpg';


function Services() {
  return (

    
    <div id='services'>
      <h1>Services</h1>

      <div id='service-container'>


      <ServiceBox image={image1} title='Friendly Environment' details='One of the best place to learn skateing in rupandehi dristict'/>
      <ServiceBox image={image2} title='High Quality Shoes' details='Professional Quality of shoes are provided with full safety. '/>
      <ServiceBox image={image3} title='Best Material' details='best place'/>

      </div>
      
    </div>
  )
}

export default Services;

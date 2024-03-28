import React from 'react'

function ServiceBox(props) {
  return (
    <div id='service-box'>
      <div id='service-img'>
        <img src= {props.image} />
        
      </div>
      <div className='h2-text'>
      <h2>{props.title}</h2>
        <p>{props.details}</p>
      </div>
      
      
      
    </div>
  )
}

export default ServiceBox;

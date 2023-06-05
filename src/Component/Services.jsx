import React from 'react'

function Services(props) {
  return (
    <div className='services'>
      {/* <span className='title'>Services</span> */}
        <div className='services-container'>
          <div className='services-item'>
            <h2 className='services-title'> Service:{props.title}</h2>
            <h3 className='services-price'> Price: {props.price}</h3>
          </div>
        </div>
    </div>
  )
}

export default Services
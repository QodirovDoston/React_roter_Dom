import React from 'react'
const img = require('../img/img.jpg')


export const Section = (props) => {
  return(
    <div className="container">
    <div className="row">
        <div className="col-12">
         <div className="jek">
            <h1 className='hel'>Hello World</h1>
            <h3>Hello world pege in React router Dom</h3>
            <img className='imgs' src={img}  alt="" />
         </div>
        </div>
    </div>
</div>
   )
  }


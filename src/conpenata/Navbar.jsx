import React from 'react'
import { Link } from 'react-router-dom'
const img2 = require("../img/img3.png")

const logo ={
    display:"flex"
}

export default function Navbar () {
  return(
    <>
    <nav>
      <div className='container'>
        <div className="row justify-content-between pt-2">
            <div className="col-3">
            <div style={logo}>
           <img src={img2} style={{width:"110px"}} alt="" />
            <h1 className='zo'>logo</h1>
           </div>
            </div>
            <div className="col-3">
                <ul className='list'>
                  <Link to ="/" style={{ textDecoration:"none",color: "black"}}>
                    <li className="list_item">home</li>
                  </Link>
                  <Link to = '/setion' style={{textDecoration:"none",color: "black"}} >
                    <li className="list_item">Section</li>
                  </Link>
                </ul>
            </div>
        </div>
      </div>
    </nav>
    </>
   )
  }
  ///fragmen
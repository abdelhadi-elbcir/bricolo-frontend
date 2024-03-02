import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/' >home</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to="/cities">city</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/categories'>catorory</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/comments'>comment</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/blogs'>blog</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/services'>service</Link>
        <Link style={{padding:"5px" , fontSize:"15px"}} to='/contact'>contact</Link>
    </div>
  )

}

export default Navbar
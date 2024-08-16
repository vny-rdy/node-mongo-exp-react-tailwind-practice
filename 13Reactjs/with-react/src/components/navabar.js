import React from 'react';
import Footer from './footer'

const navabar = (props) => {
  return (
    <div>
        <div className='logo'>{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default navabar

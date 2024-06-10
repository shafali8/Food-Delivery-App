import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <div className='bg-image'></div>
        <div className="bg-text">
          <h2>Order your favourite food here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, eos vel! Reprehenderit ipsum minima, quas pariatur illum corrupti doloremque maxime!</p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header

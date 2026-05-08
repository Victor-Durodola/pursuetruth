import React from 'react'
// import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='nav-container'>
    
        <img src="src/assets/WHITE-LOGO.svg" alt="logo" width={90} height={90}/>

        <div className='menu'>
                <a href="https://thechurch.shop/shop/pursuetruth/">
                  <div> Store</div>
                </a>
                <div>Study Material</div>
        </div>
    
    </div>
  )
}

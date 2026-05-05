import React from 'react'
import NavBar from './nav-bar'


export default function Hero() {
  return (
    <div className='hero'>
        <NavBar/>

        <div className="headings">
            <h1>PURSUING BIBLICAL TRUTH.</h1>
            <h2>LIVING GOD'S WORD.</h2>
            <p className='our-mission'>Our mission is to fulfill the Great Commission by making disciples who are not only equipped
to spread the teachings of Christ but are also committed to discovering
and applying the profound truths taught by him guiding our lives</p>
            <div className="hero-buttons">
                <button>
                    Learn More 
                    <span class="material-symbols-outlined">trending_flat</span>
                </button>
                <button>
                    Listen to Podcast
                    <span class="material-symbols-outlined">trending_flat</span>
                </button>
            </div>
        </div>
    </div>
  )
}

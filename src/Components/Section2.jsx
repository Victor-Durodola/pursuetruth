import React from 'react'

export default function Section2() {
  return (
    <div className='what-we-do-container'>
        <div className="left">
            <div className="left-image"></div>
        </div>
        <div className="right">
            <div className='sub-heading'>What we do</div>
            <h1 className='header'>
                Rooted in scripture, focused on truth
            </h1>
            <p className='description'>At Pursue Truth Ministry, Our Mission is Simple: To teach, defend, and apply God's word
                faithfully, through clear biblical teaching and christ-centered resources. We help believers
                navigate faith with clarity, conviction, and confidence
            </p>
            <ul>
                <li>Biblical teaching grounded in scripture</li>
                <li>Gospel-centered conversations</li>
                <li>Resouces for spiritual growth</li>
                <li>Faith education for everyday life</li>
            </ul>
            <div className="hero-buttons">
                <button>
                    Contact Us
                    <span className="material-symbols-outlined">trending_flat</span>
                </button>
                <button>
                    Read more
                    <span className="material-symbols-outlined">trending_flat</span>
                </button>
            </div>
        </div>
    </div>
  )
}

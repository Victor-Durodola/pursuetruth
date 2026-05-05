import React from 'react'

export default function StudyCurriculum() {
  return (
    <div className='what-we-do-container'>
        <div className="left">
            <div className="left-image"></div>
        </div>
        <div className="right">
            <div className='sub-heading'>Bible study Material</div>
            <h1 className='header'>
                Discipleship Study Material
            </h1>
            <p className='description'>Looking for impactful Bible study resources? Our curriculum 
                offers comprehensive leader guides and engaging devotionals for participants, designed 
                for discipleship groups, Sunday schools, small groups, and more. Each study focuses on
                 specific intentional discipleship training to deepen understanding and application. 
                Explore practical tools to guide your congregation into a richer relationship with God.
            </p>
            <p>Free studies available: Check out our free PDF Studies under the 
                'study material' tab
            </p>
            <div className="hero-buttons">
                <button>
                    Contact Us
                    <span class="material-symbols-outlined">trending_flat</span>
                </button>
                <button>
                    Read more
                    <span class="material-symbols-outlined">trending_flat</span>
                </button>
            </div>
        </div>
    </div>
  )
}

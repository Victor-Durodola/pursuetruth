import React from 'react'
import Episode from './episode'

export default function Podcast() {
  return (
    <div className='podcast'>
        <div className="top-section">
            <div className="sub-heading">
                Podcast
            </div>
            <div className="podcast-heading">
                <h1>CONVERSATIONS THAT POINT BACK TO TRUTH</h1>
                <button className='listen'>Listen now</button>
            </div>
            <p>
                Are you wrestling with questions about faith, God, and the world around you?  
                Do you crave a space where curiosity and honest exploration are encouraged? 
                Then join us on the "Pursue Truth Podcast"! Each episode we will seek to 
                understand who God is and how His truth intersects with our lives.  We'll 
                discuss tough questions, challenge assumptions and traditions, and uncover 
                the transformative power of Jesus Christ.  This isn't about easy shallow 
                answers – it's about 
                a genuine pursuit of God's Word, fueled by curiosity and a desire for authentic faith.

                Subscribe now and join the journey!  Together, let's discover the truth of
                 Jesus Christ that sets us free.
            </p>

        </div>
        <div className="bottom-section">
            <div className="tabs">
                <div className="tab">2026</div>
                <div className="tab">2025</div>
                <div className="tab">2024</div>
            </div>

        </div>
        <div className="episode-list">
            <Episode/>
            <Episode/>
            <Episode/>

        </div>
    </div>
  )
}

import React from 'react'

export default function Episode() {
  return (
    <div className='episode'>
        <div className="date-time">
            <div className="date">12/20/26</div>
            <span>-</span>
            <div className="time">29 MIN</div>
        </div>
        <div className="episode-title">
            Walking in obedeience W/ Jesse Hedtick
        </div>
        <img className= "episode-image" src="assets/podcast-image.png" alt="img" />
        {/* <img className= "episode-image" src="/pursuetruth/src/assets/podcast-image.png" alt="" /> */}
        {/* <div className="episode-image"></div> */}
    </div>
  )
}

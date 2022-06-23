import React from 'react'
import "./cover.css"
import coverVideo from "../../media/coverVideo.mp4";

const cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
    </div>
  )
  
}
export default cover;
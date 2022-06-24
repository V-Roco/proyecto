import React from 'react'
import "./cover.css"
import coverVideo from "../../media/coverVideo.mp4";

const cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>QBONITOTODO</h1>
        <p>Decoracion para Eventos</p>
    </div>
  )
  
}
export default cover;
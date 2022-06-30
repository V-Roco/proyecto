import React from 'react'
import "./Cover.css";
import Covervideo from "../../media/Covervideo.mp4";

 const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={Covervideo} autoPlay loop muted />
        <h1>QBONITOTODO</h1>
        <p>Decoracion para eventos</p>
    </div>
  )
}
export default Cover
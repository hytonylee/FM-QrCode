import React from 'react'
import QRImage from '../assets/image-qr-code.png';

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={QRImage} alt='qr-code-image'/>
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR Code to visit Frontend Mentor and take your coding skills to next level</p>
    </div>
  )
}

export default Card
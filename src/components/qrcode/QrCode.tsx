import React from 'react'
import './QrCode.css'
import qr from '../../qr-code-component-main/images/image-qr-code.png'
const QrCode = () => {
  return (
    <div className="container ci">
        <div className="content ci">
            <div> <img src={qr  }/></div>
            <div><p className='fw700'>Improve your front-end skills by building projects</p></div>
            <div><p className='fw400'>Scan the QR Code to visit frontend mentor and take coding skills next level</p></div>
        </div>
    </div>
  )
}

export default QrCode
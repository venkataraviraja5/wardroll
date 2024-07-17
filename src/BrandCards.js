import React from 'react'
import "./card.css"

const BrandCards = ({imageurl,brand}) => {
  return (
    <div>
      <div className='brand-card'>
        <img src={imageurl} height="100px" width="100px" style={{borderRadius:"50%"}}/>
        <p style={{fontFamily:"Figtree,sans-serif",fontSize:"16px",fontWeight:"600"}}>{brand}</p>
      </div>
    </div>
  )
}

export default BrandCards

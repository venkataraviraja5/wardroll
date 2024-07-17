import React from 'react'
import "./card.css"

const Card = ({imageurl,heading,description}) => {
  return (
    <div>
       <div className='card'>
          <div>
            <img src={imageurl} height="24px" width="24px"/>
          </div>
          <div className='heading'>
            <p style={{color:"#ff2f6f"}}>{heading}</p>
            <p>{description}</p>
          </div>
       </div>
    </div>
  )
}

export default Card

import React from 'react'
import './TCard.scss'
const TCard = ({logo,title,content,name,image,titleStyle,contentStyle}) => {
  return (
    <div className="cardContainer">
        <div className="image2">
            <img src={image} alt="" />
        </div>
        
       
        <div className="title">
            <h2 style={titleStyle}>{title}</h2>
        </div>
        <div className="content">
            <p style={contentStyle}>{content}</p>
            <p>{name}</p>
        </div>
        

    </div>
  )
}

export default TCard
import './Card.scss'


const Card = ({logo,title,content,name,image,titleStyle,contentStyle}) => {
  return (
    <div className="cardContainer">
        <div className="image">
            {logo}
            
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

export default Card
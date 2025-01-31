import './NoPage.scss'
import image1 from "./image/giphy.gif"

const NoPage = () => {
  return (
    <div className="nopageSection">
      <div className="contianer">
          <img src={image1} alt="error code"/>
      </div>
    </div>
  )
}

export default NoPage
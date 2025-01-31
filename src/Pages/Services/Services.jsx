import DarkBg from "../../components/D-BG/DarkBg"
import Navbar from "../../components/Navbar/Navbar"
import boy from "../../assets/image/Boy-Picture.png"
import "./services.scss"
import Card from "../../components/Card/Card"
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import Footer from "../../components/Footer/Footer"

const Services = () => {
  return (
    <div className="servicessSection">
      <Navbar/>
      <div className="heroImage">
        <DarkBg title="Service"/>

        <div className="AboutUss">
          <div className="aboutUstT">
            <div className="text">
              <h1>Proud to deliver excellent
              services all the time</h1>
              <p>We take pride in offering reliable, efficient, and tailored solutions to meet your logistics and transportation needs. With a dedicated team and advanced technology, we ensure that every service we provide exceeds expectations. Whether it's courier delivery, relocation, or global transportation, you can count on us to deliver excellence every time. Your satisfaction drives everything we do, and we’re here to make your logistics experience seamless and stress-free.
              </p>
            </div>

            <div className="imagecontainer">
              <img src={boy} alt="" />
            </div>
            
          </div>
        </div>

        <div className="servicesSection">
            <div className="services">
              <h2>We offer diverse services</h2>
            </div>
            <div className="cardss">
              <Card 
              logo={<QueryBuilderIcon style={{fontSize:50, color:"#A9592C"}}/>}
              title="24 Hours Services"
              content="We’re here for you around the clock! Whether it’s an urgent delivery or late-night transportation, our 24-hour service ensures your needs are met anytime, anywhere, with no delays."
              logoStyle={{}}
              />
              <Card 
              logo={<MopedOutlinedIcon style={{fontSize:50, color:"#A9592C"}}/>}
              title="Courier & Delivery"
              content="Fast, reliable, and secure courier services tailored to your needs. From documents to packages, we ensure your items are delivered on time and in perfect condition."
              logoStyle={{}}
              />
              <Card 
              logo={<LocalShippingOutlinedIcon style={{fontSize:50, color:"#A9592C"}}/>}
              title="Transportation Services"
              content=" Our comprehensive transportation solutions are designed to handle everything from small parcels to large freight, ensuring smooth and efficient delivery."
              logoStyle={{}}
              />
              <Card 
              logo={<PublicOutlinedIcon style={{fontSize:50, color:"#A9592C"}}/>}
              title="Worldwide Services"
              content="No destination is too far! With our global network, we connect you to every corner of the world, offering seamless international shipping and logistics solutions."
              logoStyle={{}}
              />
            </div>

        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Services
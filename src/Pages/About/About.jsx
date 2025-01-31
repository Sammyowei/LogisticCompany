import Navbar from "../../components/Navbar/Navbar"
import './About.scss'
import DarkBg from "../../components/D-BG/DarkBg"
import trailerHead from "../../assets/image/tailer.png"
import domain  from '../../assets/image/domain.png'
import dooropen  from '../../assets/image/door_open.png'
import mode_of_travel  from '../../assets/image/mode_of_travel.png'
import mood  from '../../assets/image/mood.png'
import cargo  from '../../assets/image/cargo.png'
import book from '../../assets/image/book icon.png'
import boxesIcon from '../../assets/image/boxes icon.png'
import carIcon from '../../assets/image/car icon.png'
import boxicon from '../../assets/image/box icon.png'
import TCard from "../../components/TestimonyCard/TCard"
import james from "../../assets/image/Ellipse 3-3.png"
import emaily from "../../assets/image/Ellipse 3-1.png"
import sarah from "../../assets/image/Ellipse 3-2.png"
import sophia from "../../assets/image/Ellipse 3.png"
import Footer from "../../components/Footer/Footer"

const About = () => {
  return (
    <div className="aboutUsContainer">
      <Navbar/>
      <div className="aboutUs">
        <DarkBg title="About Us"/>

        <div className="AboutUss">
          <div className="aboutUstT">
            <div className="text">
              <h1>Welcome to ShipDishr</h1>
              <p>At ShipDishr, we specialize in providing top-tier logistics solutions tailored to meet the diverse needs of individuals and businesses worldwide. With a focus on efficiency, reliability, and innovation, we have built a reputation as a trusted partner in logistics, courier, and transportation services.

                From seamless relocation and haulage to fast and secure courier deliveries, we are committed to simplifying the complexities of moving and transportation. Our 24/7 availability ensures that your goods are delivered on time, every time—because we understand that in logistics, time is everything.

                With a team of experienced professionals and advanced tracking technology, we guarantee the safety and security of your shipments. Whether you’re moving across the street or shipping across the globe, Tandem is here to ensure a hassle-free experience from start to finish.
              </p>
            </div>

            <div className="imagecontainer">
              <img src={trailerHead} alt="" />
            </div>
            
          </div>
        </div>

        <div className="completedtask">
          <div className="taskContainer">
            <img src={domain} alt="" />
            <h2>200+</h2>
            <h2>Homes Moved</h2>
          </div>
          <div className="taskContainer">
            <img src={dooropen} alt="" />
            <h2>300+</h2>
            <h2>Office Moved</h2>
          </div>
          <div className="taskContainer">
            <img src={mood} alt="" />
            <h2>800+</h2>
            <h2>Happy Customers</h2>
          </div>
          <div className="taskContainer">
            <img src={mode_of_travel} alt="" />
            <h2>20,000+</h2>
            <h2>Kilometer Covered</h2>
          </div>
        </div>

         <div className="why-choose-us">
          <div className="content">
            {/* <div className="image-container">
              <img
                src={cargo} 
                alt="Logistics worker"
              />
            </div> */}
            <div className="features">
                  <div className="feature">
                    <div className="icon lightning-icon"></div>
                    <div className="text">
                      <h3>Our Vision</h3>
                      <p>
                      To be the global leader in logistics and transportation solutions, delivering seamless, innovative, and customer-focused services that drive connections and empower businesses worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon cost-icon"></div>
                    <div className="text">
                      <h3>Our Mission</h3>
                      <p>
                      At Tandem, our mission is to simplify logistics by providing fast, secure, and cost-effective services. We aim to exceed customer expectations through operational excellence, advanced technology, and a passionate team committed to delivering with precision and care.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon secure-icon"></div>
                    <div className="text">
                      <h3>Our Goals</h3>
                      <p>
                        Ensure every client experiences unmatched service quality, reliability, and efficiency.
                      </p>
                      <br />
                      <p>Expand our logistics network to connect businesses and individuals across continents.</p>
                
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <div className="movingMadeEasy">
          <h1>Moving made easy</h1>
          <div className="service">
            <div className="book">
                  <img src={book} alt="book" />
                  <p>Book our service</p>
            </div>
            
            <div className="book">
                  <img src={boxesIcon} alt="book" />
                  <p>We pack your goods</p>
            </div>

            <div className="book">
                  <img src={carIcon} alt="book" />
                  <p>We move your goods</p>
            </div>

            <div className="book">
                  <img src={boxicon} alt="book" />
                  <p>We unpack your goods</p>
            </div>
          </div>
        </div>

        <div className="testimonies">
              <h2>Testimonials</h2>
              <div className="testimoniesContainer">
              <TCard 
              image={james}
              title="Exceptional Service!"
              content="I was impressed with the speed and professionalism of this company. My package was delivered right on time, and the entire process was seamless. Highly recommend!"
              name="— James K."
              titleStyle={{fontSize:20}}
              contentStyle={{fontSize:15}}
              />

              <TCard 
              image={sarah}
              title="Saved Me Money and Hassle!"
              content="The cost-saving solutions they offered were a game-changer for my business. Reliable, efficient, and budget-friendly – I couldn't ask for more."
              name="— Sarah M."
              titleStyle={{fontSize:20}}
              contentStyle={{fontSize:15}}
              />

              <TCard 
              image={sophia}
              title="Perfect for Small Businesses!"
              content="As a small business owner, I rely on efficient logistics. They handle all my shipping needs with precision and care. Highly recommended!"
              name="— Sophia W."
              titleStyle={{fontSize:20}}
              contentStyle={{fontSize:15}}
              />

              <TCard 
              image={emaily}
              title="Available 24/7!"
              content="Their 24-hour service saved me in an emergency! I needed urgent delivery at odd hours, and they delivered beyond my expectations"
              name="— Emily T."
              titleStyle={{fontSize:20}}
              contentStyle={{fontSize:15}}
              />


              </div>

        </div>

        <div className="contacT">
          <h1>Our Customer service is available 24/7</h1>
          <h1>contact:</h1>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default About
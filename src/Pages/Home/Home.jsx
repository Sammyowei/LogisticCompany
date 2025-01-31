
import "./Home.scss";
import deliveryMan from "../../assets/image/deiveryMan.png";
import whyChooseUs from "../../assets/image/wycu.png";
import james from "../../assets/image/Ellipse 3-3.png";
import emaily from "../../assets/image/Ellipse 3-1.png";
import sarah from "../../assets/image/Ellipse 3-2.png";
import sophia from "../../assets/image/Ellipse 3.png";
import Card from "../../components/Card/Card";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MopedOutlinedIcon from "@mui/icons-material/MopedOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TCard from "../../components/TestimonyCard/TCard";
import FAQs from "../../components/FAQs/FAQs";
import Footer from "../../components/Footer/Footer";
import { Modal } from "../../components/Modal";
import useParcel from "../../Hooks/useParcel";
import { useState} from "react";
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  const { loading, getParcelById, parcel } = useParcel();
  const [showModal, setShowModal] = useState(false);
  const [trackingId, setTrackingId] = useState("");


  console.log(parcel);





  const fetchParcel =  (e) => {
    e.preventDefault();
    console.log(trackingId);
    getParcelById(trackingId);
      setShowModal(true);
  };




  return (
    <>
      {showModal && (
        <Modal toggleModal={()=>setShowModal(false)}>
          <h2>Modal</h2>
          {loading ? <p>Loading...</p> : (
          <ul>
            <li>{parcel?.trackingId}</li>
            <li>{parcel?.status}</li>

            <li>{parcel?.$createdAt}</li>
            <li>{parcel?.origin}</li>
            <li>{parcel?.destination}</li>

            <li>{parcel?.senderName}</li>
            <li>{parcel?.senderPhone}</li>
            <li>{parcel?.senderAddress}</li>
            <li>{parcel?.receiverName}</li>
            <li>{parcel?.receiverPhone}</li>
          </ul>
          )}
        </Modal>

      )}
      <div className="homeContainer">
        <Navbar />
        <div className="content">
          <div className="heroSection">
            <div className="heroMessage">
              <header>
                <h1>
                  We can move you <br />
                  everywhere.{" "}
                  <span>
                    Fast <br /> and Easily
                  </span>
                </h1>
              </header>

              <div className="callToAction">
                <p>
                  Get Your Goods Moving Today! Whether it&apos;s local or
                  international, <br /> our reliable logistics service ensures
                  your deliveries are fast, secure, and hassle-free. <br />
                </p>
              </div>

              <div className="trackingContianer">
                  <form onSubmit={fetchParcel}>
                    <input
                      type="text"
                      placeholder="Please enter your tracking id"
                      className="border bg-white p-2 rounded-md"
                      onChange={(e) => setTrackingId(e.target.value)}
                      value={trackingId}
                    />
                    <button type="submit" className="tracking bg-[#A9592C] text-white p-2 rounded-md">
                      {loading ? "Loading..." : "Track"}
                    </button>


              </form>
            </div>


          </div>

            <div className="heroImage">
              <img src={deliveryMan} alt="deivery man image" />
            </div>
          </div>

          <div className="servicesSection">
            <div className="services">
              <h2>Our Services</h2>
            </div>
            <div className="cardss">
              <Card
                logo={
                  <QueryBuilderIcon
                    style={{ fontSize: 50, color: "#A9592C" }}
                  />
                }
                title="24 Hours Services"
                content="We’re here for you around the clock! Whether it’s an urgent delivery or late-night transportation, our 24-hour service ensures your needs are met anytime, anywhere, with no delays."
                logoStyle={{}}
                titleStyle={{ fontSize: 25, color: "#000" }}
              />
              <Card
                logo={
                  <MopedOutlinedIcon
                    style={{ fontSize: 50, color: "#A9592C" }}
                  />
                }
                title="Courier & Delivery"
                content="Fast, reliable, and secure courier services tailored to your needs. From documents to packages, we ensure your items are delivered on time and in perfect condition."
                logoStyle={{}}
                titleStyle={{ fontSize: 25, color: "#000" }}
              />
              <Card
                logo={
                  <LocalShippingOutlinedIcon
                    style={{ fontSize: 50, color: "#A9592C" }}
                  />
                }
                title="Transportation Services"
                content=" Our comprehensive transportation solutions are designed to handle everything from small parcels to large freight, ensuring smooth and efficient delivery."
                logoStyle={{}}
                titleStyle={{ fontSize: 25, color: "#000" }}
              />
              <Card
                logo={
                  <PublicOutlinedIcon
                    style={{ fontSize: 50, color: "#A9592C" }}
                  />
                }
                title="Worldwide Services"
                content="No destination is too far! With our global network, we connect you to every corner of the world, offering seamless international shipping and logistics solutions."
                logoStyle={{}}
                titleStyle={{ fontSize: 25, color: "#000" }}
              />
            </div>
          </div>

          <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <div className="content">
              {/* <div className="image-container">
                <img src={whyChooseUs} alt="Logistics worker" />
              </div> */}
              <div className="features">
                <div className="feature">
                  <div className="icon lightning-icon"></div>
                  <div className="text">
                    <h3>Right on Time</h3>
                    <p>
                    We prioritize punctuality, ensuring your packages arrive exactly when you need them, without delays.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <div className="icon cost-icon"></div>
                  <div className="text">
                    <h3>Cost Saving</h3>
                    <p>
                    Get top-notch logistics services at the best rates, helping you save more while enjoying efficient deliveries.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <div className="icon secure-icon"></div>
                  <div className="text">
                    <h3>Safe & Secure</h3>
                    <p>
                    With advanced tracking and secure handling, we guarantee your shipments are protected every step of the way.
                    </p>
                  </div>
                </div>
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
                titleStyle={{ fontSize: 20 }}
                contentStyle={{ fontSize: 15 }}
              />

              <TCard
                image={sarah}
                title="Saved Me Money and Hassle!"
                content="The cost-saving solutions they offered were a game-changer for my business. Reliable, efficient, and budget-friendly – I couldn't ask for more."
                name="— Sarah M."
                titleStyle={{ fontSize: 20 }}
                contentStyle={{ fontSize: 15 }}
              />

              <TCard
                image={sophia}
                title="Perfect for Small Businesses!"
                content="As a small business owner, I rely on efficient logistics. They handle all my shipping needs with precision and care. Highly recommended!"
                name="— Sophia W."
                titleStyle={{ fontSize: 20 }}
                contentStyle={{ fontSize: 15 }}
              />

              <TCard
                image={emaily}
                title="Available 24/7!"
                content="Their 24-hour service saved me in an emergency! I needed urgent delivery at odd hours, and they delivered beyond my expectations"
                name="— Emily T."
                titleStyle={{ fontSize: 20 }}
                contentStyle={{ fontSize: 15 }}
              />
            </div>
          </div>

          <div className="FAQU">
            <FAQs />
          </div>

          <div className="FooterSection">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

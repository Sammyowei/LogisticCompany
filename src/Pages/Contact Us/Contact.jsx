import DarkBg from '../../components/D-BG/DarkBg'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="conUs">
      <Navbar/>
      <div className="contACTUs">
        <DarkBg title="Contact" />
        <div className="contact-form">
            <h2 className="contact-form__title">Write your message</h2>
            <form className="contact-form__container">
              <div className="contact-form__group">
                <input type="text" placeholder="Full name *" className="input-field" />
                <input type="email" placeholder="Email *" className="input-field" />
              </div>
              <div className="contact-form__group">
                <input type="text" placeholder="Phone *" className="input-field" />
                <input type="text" placeholder="City *" className="input-field" />
              </div>
              <input type="text" placeholder="Subject" className="input-field input-full" />
              <textarea placeholder="Type your message here......." className="input-field input-textarea"></textarea>
              <button type="submit" className="contact-form__button">Send message</button>
            </form>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact
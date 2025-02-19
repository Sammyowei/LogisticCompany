import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Company Info */}
        <div className="footer__section footer__about">
          <h3 className="footer__title">ShipDashr</h3>
          <p className="footer__text">
            When you’re moving from your old house to a new location, there are
            thousands of things to be taken care of. We’ll be your assistants,
            helping you move all your belongings fast wherever you wish.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__section">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__links">
            <li>
              <a href="#">24 Hours Services</a>
            </li>
            <li>
              <a href="#">Courier & Delivery</a>
            </li>
            <li>
              <a href="#">Transportation Services</a>
            </li>
            <li>
              <a href="#">Worldwide Services</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer__section footer__contact">
          <h3 className="footer__title">Contact us</h3>
          <ul className="footer__contact-info">
            <li>
              {/* <i className="fas fa-map-marker-alt"></i> Liberation Road, CA */}
            </li>
            <li>
              {/* <i className="fas fa-phone"></i> +1-234-5675-57 */}
            </li>
            <li>
              {/* <i className="fas fa-envelope"></i> Info@tandem.com */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
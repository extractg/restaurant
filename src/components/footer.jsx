import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
const Footer = () =>{
    return(
<footer className="footer" id="contacts">
  <div
    className="section-divider footer__divider"
    aria-hidden="true"
  ></div>

  <div className="container">
    <div className="footer__inner" data-aos="fade-up">
      <div className="footer__brand">
        <Link to="/" className="footer__logo">
          <img
            src={logo}
            alt="Deliciora"
            className="footer__logo-img"
          />
        </Link>

        <p className="footer__text">
          European-inspired dining, seasonal ingredients, and memorable
          evenings crafted around every table.
        </p>

        <div className="footer__socials">
          <a href="#" className="footer__social" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" className="footer__social" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" className="footer__social" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer__column footer__explore">
        <h3 className="footer__title">Explore</h3>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">
              Menu
            </a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">
              Our Story
            </a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">
              Our Chef
            </a>
          </li>

          <li className="footer__item">
            <a href="pages/products.html" className="footer__link">
              Products
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__column footer__visit">
        <h3 className="footer__title">Visit</h3>

        <p className="footer__location">Riga, Latvia</p>

        <div className="footer__hours">
          <div className="footer__hours-item">
            <span className="footer__hours-day">Mon — Fri</span>
            <span className="footer__hours-time">12:00 — 23:00</span>
          </div>

          <div className="footer__hours-item">
            <span className="footer__hours-day">Saturday</span>
            <span className="footer__hours-time">13:00 — 00:00</span>
          </div>

          <div className="footer__hours-item">
            <span className="footer__hours-day">Sunday</span>
            <span className="footer__hours-time">13:00 — 22:00</span>
          </div>
        </div>
      </div>

      <div className="footer__column footer__reservation">
        <h3 className="footer__title">Reservations</h3>

        <p className="footer__reservation-text">
          Planning an evening with us? Reserve your table in advance.
        </p>

        <a href="#" className="footer__reservation-link">
          Book a table
          <span>→</span>
        </a>
      </div>
    </div>

    <div className="footer__bottom">
      <p className="footer__copyright">
        © 2026 Deliciora. All rights reserved.
      </p>

      <div className="footer__bottom-links">
        <a href="#" className="footer__bottom-link">
          Privacy Policy
        </a>

        <a href="#" className="footer__bottom-link">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
    );
};
export default Footer
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.png";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer
            className="footer"
            id="contacts"
        >
            <div
                className="section-divider footer__divider"
                aria-hidden="true"
            ></div>

            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <Link
                            to="/"
                            className="footer__logo"
                        >
                            <img
                                src={logo}
                                alt="Deliciora"
                                className="footer__logo-img"
                            />
                        </Link>

                        <p className="footer__text">
                            {t("footer.description")}
                        </p>

                        <div className="footer__socials">
                            <a
                                href="#"
                                className="footer__social"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a
                                href="#"
                                className="footer__social"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="footer__social"
                                aria-label="Twitter"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer__column footer__explore">
                        <h3 className="footer__title">
                            {t("footer.explore.title")}
                        </h3>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link
                                    to="/products"
                                    className="footer__link"
                                >
                                    {t("footer.explore.menu")}
                                </Link>
                            </li>

                            <li className="footer__item">
                                <a
                                    href="/#our-story"
                                    className="footer__link"
                                >
                                    {t("footer.explore.ourStory")}
                                </a>
                            </li>

                            <li className="footer__item">
                                <a
                                    href="/#chef"
                                    className="footer__link"
                                >
                                    {t("footer.explore.ourChef")}
                                </a>
                            </li>

                            <li className="footer__item">
                              <Link
                                  to="/favorites"
                                  className="footer__link"
                              >
                                  {t("footer.explore.favorites")}
                              </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__column footer__visit">
                        <h3 className="footer__title">
                            {t("footer.visit.title")}
                        </h3>

                        <p className="footer__location">
                            {t("footer.visit.location")}
                        </p>

                        <div className="footer__hours">
                            <div className="footer__hours-item">
                                <span className="footer__hours-day">
                                    {t("footer.visit.weekdays")}
                                </span>

                                <span className="footer__hours-time">
                                    12:00 — 23:00
                                </span>
                            </div>

                            <div className="footer__hours-item">
                                <span className="footer__hours-day">
                                    {t("footer.visit.saturday")}
                                </span>

                                <span className="footer__hours-time">
                                    13:00 — 00:00
                                </span>
                            </div>

                            <div className="footer__hours-item">
                                <span className="footer__hours-day">
                                    {t("footer.visit.sunday")}
                                </span>

                                <span className="footer__hours-time">
                                    13:00 — 22:00
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="footer__column footer__reservation">
                        <h3 className="footer__title">
                            {t("footer.reservations.title")}
                        </h3>

                        <p className="footer__reservation-text">
                            {t("footer.reservations.description")}
                        </p>

                        <a
                            href="#"
                            className="footer__reservation-link"
                        >
                            {t("footer.reservations.bookTable")}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        {t("footer.copyright")}
                    </p>

                    <div className="footer__bottom-links">
                        <a
                            href="#"
                            className="footer__bottom-link"
                        >
                            {t("footer.privacy")}
                        </a>

                        <a
                            href="#"
                            className="footer__bottom-link"
                        >
                            {t("footer.terms")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
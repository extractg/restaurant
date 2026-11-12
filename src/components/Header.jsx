import { useEffect, useState } from "react";
import {
    Link,
    NavLink,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();

    const currentLanguage =
        i18n.resolvedLanguage || "en";

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const changeLanguage = async (language) => {
        await i18n.changeLanguage(language);

        localStorage.setItem("language", language);
    };

    const scrollToSection = (sectionId) => {
        closeMenu();

        if (location.pathname !== "/") {
            navigate(`/#${sectionId}`);
            return;
        }

        const section =
            document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const goHome = () => {
        closeMenu();

        if (location.pathname !== "/") {
            navigate("/");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuOpen]);

    useEffect(() => {
        if (
            location.pathname !== "/" ||
            !location.hash
        ) {
            return;
        }

        const sectionId =
            location.hash.replace("#", "");

        const timer = setTimeout(() => {
            const section =
                document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [location.pathname, location.hash]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        aria-label="Deliciora home"
                    >
                        <img
                            src={logo}
                            alt="Deliciora"
                            className="header__logo"
                        />
                    </Link>

                    <nav
                        className={
                            menuOpen
                                ? "nav active"
                                : "nav"
                        }
                    >
                        <ul className="nav__list">
                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={goHome}
                                >
                                    {t("header.home")}
                                </button>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection(
                                            "specials",
                                        )
                                    }
                                >
                                    {t(
                                        "header.specials",
                                    )}
                                </button>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection(
                                            "our-story",
                                        )
                                    }
                                >
                                    {t(
                                        "header.ourStory",
                                    )}
                                </button>
                            </li>

                            <li className="nav__items">
                                <NavLink
                                    to="/products"
                                    className={({
                                        isActive,
                                    }) =>
                                        isActive
                                            ? "nav__link active"
                                            : "nav__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    {t("header.menu")}
                                </NavLink>
                            </li>

                            <li className="nav__items">
                                <NavLink
                                    to="/favorites"
                                    className={({
                                        isActive,
                                    }) =>
                                        isActive
                                            ? "nav__link active"
                                            : "nav__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    {t(
                                        "header.favorites",
                                    )}
                                </NavLink>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection(
                                            "contacts",
                                        )
                                    }
                                >
                                    {t(
                                        "header.contacts",
                                    )}
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <div className="header__language">
                            <button
                                className={
                                    currentLanguage ===
                                    "en"
                                        ? "header__language-btn active"
                                        : "header__language-btn"
                                }
                                type="button"
                                onClick={() =>
                                    changeLanguage("en")
                                }
                                aria-pressed={
                                    currentLanguage ===
                                    "en"
                                }
                            >
                                EN
                            </button>

                            <button
                                className={
                                    currentLanguage ===
                                    "lv"
                                        ? "header__language-btn active"
                                        : "header__language-btn"
                                }
                                type="button"
                                onClick={() =>
                                    changeLanguage("lv")
                                }
                                aria-pressed={
                                    currentLanguage ===
                                    "lv"
                                }
                            >
                                LV
                            </button>
                        </div>

                        <button
                            className={
                                menuOpen
                                    ? "burger active"
                                    : "burger"
                            }
                            onClick={() =>
                                setMenuOpen(
                                    (current) =>
                                        !current,
                                )
                            }
                            id="burger"
                            type="button"
                            aria-label={
                                menuOpen
                                    ? t(
                                          "header.closeMenu",
                                      )
                                    : t(
                                          "header.openMenu",
                                      )
                            }
                            aria-expanded={menuOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
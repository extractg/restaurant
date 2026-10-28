import { useEffect, useState } from "react";
import {
    Link,
    NavLink,
    useLocation,
    useNavigate,
} from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        closeMenu();

        if (location.pathname !== "/") {
            navigate(`/#${sectionId}`);
            return;
        }

        const section = document.getElementById(sectionId);

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
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuOpen]);

    useEffect(() => {
        if (location.pathname !== "/" || !location.hash) {
            return;
        }

        const sectionId = location.hash.replace("#", "");

        const timer = setTimeout(() => {
            const section = document.getElementById(sectionId);

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
                    >
                        <img
                            src={logo}
                            alt="Deliciora"
                            className="header__logo"
                        />
                    </Link>

                    <nav className={menuOpen ? "nav active" : "nav"}>
                        <ul className="nav__list">
                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={goHome}
                                >
                                    Home
                                </button>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection("specials")
                                    }
                                >
                                    Specials
                                </button>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection("our-story")
                                    }
                                >
                                    Our Story
                                </button>
                            </li>

                            <li className="nav__items">
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav__link active"
                                            : "nav__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Menu
                                </NavLink>
                            </li>

                            <li className="nav__items">
                                <NavLink
                                    to="/favorites"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav__link active"
                                            : "nav__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Favorites
                                </NavLink>
                            </li>

                            <li className="nav__items">
                                <button
                                    type="button"
                                    className="nav__link"
                                    onClick={() =>
                                        scrollToSection("contacts")
                                    }
                                >
                                    Contacts
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <div className="header__language">
                            <button
                                className="header__language-btn active"
                                type="button"
                            >
                                EN
                            </button>

                            <button
                                className="header__language-btn"
                                type="button"
                            >
                                LV
                            </button>
                        </div>

                        <button
                            className={
                                menuOpen ? "burger active" : "burger"
                            }
                            onClick={() => setMenuOpen(!menuOpen)}
                            id="burger"
                            type="button"
                            aria-label="Open menu"
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
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Deliciora"
                            className="header__logo"
                        />
                    </Link>

                    <nav className={menuOpen ? "nav active" : "nav"}>
                        <ul className="nav__list">
                            <li className="nav__items">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav__link active"
                                            : "nav__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Home
                                </NavLink>
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
                                    Products
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
                                <a
                                    href="#contacts"
                                    className="nav__link"
                                    onClick={closeMenu}
                                >
                                    Contacts
                                </a>
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
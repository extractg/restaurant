import { useState, useEffect } from "react";
import logo from '../assets/images/logo.png'
const Header = () =>{
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
            <a href="#"
                ><img src={logo} alt="Logo" className="header__logo"
            /></a>
            <nav className={menuOpen ? "nav active" : "nav"}>
                <ul className="nav__list">
                <li className="nav__items"><a href="index.html" className="nav__link" onClick={closeMenu}>Home</a></li>
                <li className="nav__items">
                    <a href="pages/products.html" className="nav__link" onClick={closeMenu}>Products</a>
                </li>
                <li className="nav__items">
                    <a href="pages/favorites.html" className="nav__link" onClick={closeMenu}>Favorites</a>
                </li>
                <li className="nav__items">
                    <a href="#contacts" className="nav__link" onClick={closeMenu}>Contacts</a>
                </li>
                </ul>
            </nav>
            <div className="header__actions">
                <a className="header__btn btn btn--secondary" href="pages/profile.html">Profile</a>
                <button
                    className={menuOpen ? "burger active" : "burger"}
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
    )
}
export default Header

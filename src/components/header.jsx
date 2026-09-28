import logo from '../assets/images/logo.png'
const Header = () =>{
    return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
            <a href="#"
                ><img src={logo} alt="Logo" className="header__logo"
            /></a>
            <nav className="nav">
                <ul className="nav__list">
                <li className="nav__items"><a href="index.html" className="nav__link">Home</a></li>
                <li className="nav__items">
                    <a href="pages/products.html" className="nav__link">Products</a>
                </li>
                <li className="nav__items">
                    <a href="pages/favorites.html" className="nav__link">Favorites</a>
                </li>
                <li className="nav__items">
                    <a href="#contacts" className="nav__link">Contacts</a>
                </li>
                </ul>
            </nav>
            <div className="header__actions">
                <a className="header__btn btn btn--secondary" href="pages/profile.html">Profile</a>
                <button
                    className="burger"
                    id="burger"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded="false"
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

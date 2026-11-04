import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import "../css/pages/favorites.css";

function Favorites({ favorites, toggleFavorite, allProducts }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");

    const navigate = useNavigate();

    const favoriteProducts = allProducts.filter((product) => {
        return favorites.includes(product.id);
    });

    const featuredFavorite = favoriteProducts[0];

    const searchedFavorites = favoriteProducts.filter((product) => {
        return product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
    });

    const sortedFavorites = [...searchedFavorites];

    if (sortType === "price-low") {
        sortedFavorites.sort((a, b) => {
            return a.price - b.price;
        });
    }

    if (sortType === "price-high") {
        sortedFavorites.sort((a, b) => {
            return b.price - a.price;
        });
    }

    if (sortType === "name") {
        sortedFavorites.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    }

    return (
        <main className="favorites">
            <section className="favorites__hero">
                <div className="container">
                    <div className="favorites__hero-inner">
                        <div className="favorites__header">
                            <span className="favorites__eyebrow">
                                Your Collection
                            </span>

                            <h1 className="favorites__title">
                                Your Favorite
                                <span>Dishes</span>
                            </h1>

                            <p className="favorites__text">
                                Keep the dishes worth coming back for. Your
                                personal selection from the Deliciora menu,
                                saved in one place and always ready to revisit.
                            </p>
                        </div>

                        <div className="favorites__hero-meta">
                            <span className="favorites__hero-number">
                                {String(favoriteProducts.length).padStart(2, "0")}
                            </span>

                            <div className="favorites__hero-meta-content">
                                <span className="favorites__hero-meta-label">
                                    Saved Dishes
                                </span>

                                <span className="favorites__hero-meta-line"></span>

                                <p>
                                    A personal collection curated by you,
                                    one dish at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {favoriteProducts.length === 0 ? (
                <section className="favorites__empty">
                    <div className="container">
                        <div className="favorites__empty-inner">
                            <span className="favorites__empty-icon">
                                <i className="fa-regular fa-heart"></i>
                            </span>

                            <span className="favorites__label">
                                Your Collection
                            </span>

                            <h2 className="favorites__empty-title">
                                Your collection is empty
                            </h2>

                            <p className="favorites__empty-text">
                                Save dishes from our menu and they will appear
                                here for you to revisit whenever you like.
                            </p>

                            <button
                                className="btn btn--primary"
                                type="button"
                                onClick={() => navigate("/products")}
                            >
                                Explore Menu
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <>
                    <section className="favorites__featured">
                        <div className="container">
                            <div className="favorites__featured-heading">
                                <span className="favorites__label">
                                    Featured Favorite
                                </span>

                                <h2 className="favorites__featured-title">
                                    A Taste Worth Returning To
                                </h2>
                            </div>

                            <div className="favorites__featured-card">
                                <div className="favorites__featured-image">
                                    <img
                                        src={featuredFavorite.image}
                                        alt={featuredFavorite.title}
                                    />
                                </div>

                                <div className="favorites__featured-content">
                                    <span className="favorites__featured-category">
                                        {featuredFavorite.category}
                                    </span>

                                    <h3 className="favorites__featured-name">
                                        {featuredFavorite.title}
                                    </h3>

                                    <p className="favorites__featured-text">
                                        One of the dishes you chose to keep
                                        close — a favorite from the Deliciora
                                        menu ready to be rediscovered.
                                    </p>

                                    <div className="favorites__featured-bottom">
                                        <span className="favorites__featured-price">
                                            €{featuredFavorite.price}
                                        </span>

                                        <button
                                            className="favorites__featured-link"
                                            type="button"
                                            onClick={() =>
                                                navigate(
                                                    `/products/${featuredFavorite.id}`,
                                                )
                                            }
                                        >
                                            View Dish
                                            <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="favorites__collection">
                        <div className="container">
                            <div className="favorites__section-header">
                                <div>
                                    <span className="favorites__label">
                                        Your Selection
                                    </span>

                                    <h2 className="favorites__subtitle">
                                        Saved for Later
                                    </h2>
                                </div>

                                <span className="favorites__count">
                                    {String(favoriteProducts.length).padStart(
                                        2,
                                        "0",
                                    )}{" "}
                                    Dishes
                                </span>
                            </div>

                            <div className="favorites__controls">
                                <div className="favorites__search">
                                    <i className="fa-solid fa-magnifying-glass"></i>

                                    <input
                                        type="text"
                                        placeholder="Search your collection..."
                                        value={searchTerm}
                                        onChange={(event) =>
                                            setSearchTerm(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="favorites__sort-wrapper">
                                    <span className="favorites__sort-label">
                                        Sort By
                                    </span>

                                    <select
                                        className="favorites__sort"
                                        value={sortType}
                                        onChange={(event) =>
                                            setSortType(event.target.value)
                                        }
                                    >
                                        <option value="default">
                                            Default
                                        </option>

                                        <option value="name">
                                            Name A-Z
                                        </option>

                                        <option value="price-low">
                                            Price: Low to High
                                        </option>

                                        <option value="price-high">
                                            Price: High to Low
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {sortedFavorites.length === 0 ? (
                                <div className="favorites__no-results">
                                    <span className="favorites__no-results-icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>

                                    <h3>No matching dishes</h3>

                                    <p>
                                        Try another search or clear your search
                                        to see your saved collection.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm("")}
                                    >
                                        Clear Search
                                    </button>
                                </div>
                            ) : (
                                <div className="favorites__grid">
                                    {sortedFavorites.map((product) => {
                                        return (
                                            <ProductCard
                                                key={product.id}
                                                id={product.id}
                                                title={product.title}
                                                category={product.category}
                                                price={product.price}
                                                image={product.image}
                                                isFavorite={true}
                                                onFavoriteClick={
                                                    toggleFavorite
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}

export default Favorites;
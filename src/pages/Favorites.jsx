import { useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import "../css/pages/favorites.css";

function Favorites({ favorites, toggleFavorite, allProducts }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");

    const favoriteProducts = allProducts.filter((product) => {
        return favorites.includes(product.id);
    });

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
                    <div className="favorites__header">
                        <span className="favorites__eyebrow">
                            Your Collection
                        </span>

                        <h1 className="favorites__title">
                            Your Favorite Dishes
                        </h1>

                        <p className="favorites__text">
                            A personal collection of the dishes you love most,
                            saved in one place and always ready to revisit.
                        </p>
                    </div>
                </div>
            </section>

            <section className="favorites__collection">
                <div className="container">
                    <div className="favorites__section-header">
                        <div>
                            <span className="favorites__label">
                                Saved
                            </span>

                            <h2 className="favorites__subtitle">
                                Saved Dishes
                            </h2>
                        </div>

                        <span className="favorites__count">
                            {favoriteProducts.length} Dishes
                        </span>
                    </div>

                    <div className="favorites__controls">
                        <div className="favorites__search">
                            <i className="fa-solid fa-magnifying-glass"></i>

                            <input
                                type="text"
                                placeholder="Search saved dishes..."
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                            />
                        </div>
                        <select
                            className="favorites__sort"
                            value={sortType}
                            onChange={(event) => setSortType(event.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="name">Name A-Z</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>


                    <div className="favorites__grid">
                        {favoriteProducts.length === 0 ? (
                            <p>No favorites yet</p>
                        ) : sortedFavorites.length === 0 ? (
                            <p>No dishes found</p>
                        ) : (
                            sortedFavorites.map((product) => {
                                return (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        category={product.category}
                                        price={product.price}
                                        image={product.image}
                                        isFavorite={true}
                                        onFavoriteClick={toggleFavorite}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Favorites;
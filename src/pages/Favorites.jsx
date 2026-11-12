import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProductCard from "../components/ProductCard.jsx";

import "../css/pages/favorites.css";

function Favorites({
    favorites,
    toggleFavorite,
    allProducts,
}) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortOptions = [
        {
            value: "default",
            label: t("favorites.sort.default"),
        },
        {
            value: "name",
            label: t("favorites.sort.name"),
        },
        {
            value: "price-low",
            label: t("favorites.sort.priceLow"),
        },
        {
            value: "price-high",
            label: t("favorites.sort.priceHigh"),
        },
    ];

    const selectedSort = sortOptions.find((option) => {
        return option.value === sortType;
    });

    const favoriteProducts = allProducts.filter((product) => {
        return favorites.includes(product.id);
    });

    const featuredFavorite = favoriteProducts[0];

    const searchedFavorites = favoriteProducts.filter(
        (product) => {
            return product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        },
    );

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

    const featuredCategoryKey =
        featuredFavorite?.category?.toLowerCase();

    return (
        <main className="favorites">
            <section className="favorites__hero">
                <div className="container">
                    <div className="favorites__hero-inner">
                        <div className="favorites__header">
                            <span className="favorites__eyebrow">
                                {t("favorites.hero.eyebrow")}
                            </span>

                            <h1 className="favorites__title">
                                {t("favorites.hero.title")}{" "}
                                <span>
                                    {t(
                                        "favorites.hero.titleAccent",
                                    )}
                                </span>
                            </h1>

                            <p className="favorites__text">
                                {t(
                                    "favorites.hero.description",
                                )}
                            </p>
                        </div>

                        <div className="favorites__hero-meta">
                            <span className="favorites__hero-number">
                                {String(
                                    favoriteProducts.length,
                                ).padStart(2, "0")}
                            </span>

                            <div className="favorites__hero-meta-content">
                                <span className="favorites__hero-meta-label">
                                    {t(
                                        "favorites.hero.savedDishes",
                                    )}
                                </span>

                                <span className="favorites__hero-meta-line"></span>

                                <p>
                                    {t(
                                        "favorites.hero.metaDescription",
                                    )}
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
                                {t(
                                    "favorites.empty.label",
                                )}
                            </span>

                            <h2 className="favorites__empty-title">
                                {t(
                                    "favorites.empty.title",
                                )}
                            </h2>

                            <p className="favorites__empty-text">
                                {t(
                                    "favorites.empty.description",
                                )}
                            </p>

                            <button
                                className="btn btn--primary"
                                type="button"
                                onClick={() =>
                                    navigate("/products")
                                }
                            >
                                {t(
                                    "favorites.empty.button",
                                )}
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
                                    {t(
                                        "favorites.featured.label",
                                    )}
                                </span>

                                <h2 className="favorites__featured-title">
                                    {t(
                                        "favorites.featured.title",
                                    )}
                                </h2>
                            </div>

                            <div className="favorites__featured-card">
                                <div className="favorites__featured-image">
                                    <img
                                        src={
                                            featuredFavorite.image
                                        }
                                        alt={
                                            featuredFavorite.title
                                        }
                                    />
                                </div>

                                <div className="favorites__featured-content">
                                    <span className="favorites__featured-category">
                                        {t(
                                            `products.categories.${featuredCategoryKey}`,
                                            {
                                                defaultValue:
                                                    featuredFavorite.category,
                                            },
                                        )}
                                    </span>

                                    <h3 className="favorites__featured-name">
                                        {
                                            featuredFavorite.title
                                        }
                                    </h3>

                                    <p className="favorites__featured-text">
                                        {t(
                                            "favorites.featured.description",
                                        )}
                                    </p>

                                    <div className="favorites__featured-bottom">
                                        <span className="favorites__featured-price">
                                            €
                                            {
                                                featuredFavorite.price
                                            }
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
                                            {t(
                                                "favorites.featured.viewDish",
                                            )}

                                            <span aria-hidden="true">
                                                →
                                            </span>
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
                                        {t(
                                            "favorites.collection.label",
                                        )}
                                    </span>

                                    <h2 className="favorites__subtitle">
                                        {t(
                                            "favorites.collection.title",
                                        )}
                                    </h2>
                                </div>

                                <span className="favorites__count">
                                    {String(
                                        favoriteProducts.length,
                                    ).padStart(2, "0")}{" "}
                                    {t(
                                        "favorites.collection.dishes",
                                    )}
                                </span>
                            </div>

                            <div className="favorites__controls">
                                <div className="favorites__search">
                                    <i className="fa-solid fa-magnifying-glass"></i>

                                    <input
                                        type="text"
                                        placeholder={t(
                                            "favorites.search.placeholder",
                                        )}
                                        aria-label={t(
                                            "favorites.search.label",
                                        )}
                                        value={searchTerm}
                                        onChange={(event) =>
                                            setSearchTerm(
                                                event.target
                                                    .value,
                                            )
                                        }
                                    />
                                </div>

                                <div className="favorites__sort-wrapper">
                                    <span className="favorites__sort-label">
                                        {t(
                                            "favorites.sort.label",
                                        )}
                                    </span>

                                    <div
                                        className={`favorites__sort-dropdown ${
                                            isSortOpen
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="favorites__sort"
                                            type="button"
                                            aria-haspopup="listbox"
                                            aria-expanded={
                                                isSortOpen
                                            }
                                            aria-label={t(
                                                "favorites.sort.label",
                                            )}
                                            onClick={() =>
                                                setIsSortOpen(
                                                    !isSortOpen,
                                                )
                                            }
                                        >
                                            <span>
                                                {
                                                    selectedSort?.label
                                                }
                                            </span>

                                            <i className="fa-solid fa-chevron-down"></i>
                                        </button>

                                        {isSortOpen && (
                                            <div
                                                className="favorites__sort-menu"
                                                role="listbox"
                                            >
                                                {sortOptions.map(
                                                    (
                                                        option,
                                                    ) => {
                                                        const isSelected =
                                                            sortType ===
                                                            option.value;

                                                        return (
                                                            <button
                                                                key={
                                                                    option.value
                                                                }
                                                                className={`favorites__sort-option ${
                                                                    isSelected
                                                                        ? "active"
                                                                        : ""
                                                                }`}
                                                                type="button"
                                                                role="option"
                                                                aria-selected={
                                                                    isSelected
                                                                }
                                                                onClick={() => {
                                                                    setSortType(
                                                                        option.value,
                                                                    );

                                                                    setIsSortOpen(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                <span>
                                                                    {
                                                                        option.label
                                                                    }
                                                                </span>

                                                                {isSelected && (
                                                                    <i className="fa-solid fa-check"></i>
                                                                )}
                                                            </button>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {sortedFavorites.length === 0 ? (
                                <div className="favorites__no-results">
                                    <span className="favorites__no-results-icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>

                                    <h3>
                                        {t(
                                            "favorites.noResults.title",
                                        )}
                                    </h3>

                                    <p>
                                        {t(
                                            "favorites.noResults.description",
                                        )}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSearchTerm("")
                                        }
                                    >
                                        {t(
                                            "favorites.noResults.button",
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <div className="favorites__grid">
                                    {sortedFavorites.map(
                                        (product) => {
                                            return (
                                                <ProductCard
                                                    key={
                                                        product.id
                                                    }
                                                    id={
                                                        product.id
                                                    }
                                                    title={
                                                        product.title
                                                    }
                                                    category={
                                                        product.category
                                                    }
                                                    price={
                                                        product.price
                                                    }
                                                    image={
                                                        product.image
                                                    }
                                                    isFavorite={
                                                        true
                                                    }
                                                    onFavoriteClick={
                                                        toggleFavorite
                                                    }
                                                />
                                            );
                                        },
                                    )}
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
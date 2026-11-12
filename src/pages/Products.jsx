import { useState } from "react";
import { useTranslation } from "react-i18next";

import ProductCard from "../components/ProductCard.jsx";

const categories = [
    {
        value: "all",
        translationKey: "all",
    },
    {
        value: "Beef",
        translationKey: "beef",
    },
    {
        value: "Chicken",
        translationKey: "chicken",
    },
    {
        value: "Seafood",
        translationKey: "seafood",
    },
    {
        value: "Dessert",
        translationKey: "dessert",
    },
];

function Products({
    favorites,
    toggleFavorite,
    allProducts,
}) {
    const { t } = useTranslation();

    const [selectedCategory, setSelectedCategory] =
        useState("all");

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts =
        selectedCategory === "all"
            ? allProducts
            : allProducts.filter((product) => {
                  return product.category === selectedCategory;
              });

    const searchedProducts = filteredProducts.filter(
        (product) => {
            return product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        },
    );

    return (
        <section className="products">
            <div className="container">
                <div className="products__header">
                    <span className="products__label">
                        {t("products.label")}
                    </span>

                    <h1 className="products__title">
                        {t("products.title")}
                    </h1>

                    <p className="products__text">
                        {t("products.description")}
                    </p>
                </div>

                <div className="products__controls">
                    <div className="products__search">
                        <input
                            type="text"
                            className="products__search-input"
                            id="searchInput"
                            placeholder={t(
                                "products.searchPlaceholder",
                            )}
                            aria-label={t(
                                "products.searchLabel",
                            )}
                            autoComplete="off"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(
                                    event.target.value,
                                )
                            }
                        />

                        <button
                            className="products__search-button"
                            type="button"
                            aria-label={t(
                                "products.searchLabel",
                            )}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className="products__categories">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                className={
                                    selectedCategory ===
                                    category.value
                                        ? "products__category active"
                                        : "products__category"
                                }
                                data-category={
                                    category.value
                                }
                                onClick={() =>
                                    setSelectedCategory(
                                        category.value,
                                    )
                                }
                            >
                                {t(
                                    `products.categories.${category.translationKey}`,
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="products__status"
                    id="productsStatus"
                >
                    {searchedProducts.length === 0 && (
                        <p>
                            {t("products.noResults")}
                        </p>
                    )}
                </div>

                <div
                    className="products__grid"
                    id="productsGrid"
                >
                    {searchedProducts.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                category={product.category}
                                price={product.price}
                                onFavoriteClick={
                                    toggleFavorite
                                }
                                isFavorite={favorites.includes(
                                    product.id,
                                )}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Products;
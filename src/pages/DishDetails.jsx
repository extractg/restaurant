import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getProductById } from "../api/productsApi.js";

function getIngredients(product) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = product[`strIngredient${i}`];
        const measure = product[`strMeasure${i}`];

        if (ingredient) {
            ingredients.push({
                name: ingredient,
                measure: measure,
                image: `https://www.themealdb.com/images/ingredients/${ingredient}.png`,
            });
        }
    }

    return ingredients;
}

function DishDetails() {
    const { t } = useTranslation();

    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const [showAllIngredients, setShowAllIngredients] =
        useState(false);

    const [showFullPreparation, setShowFullPreparation] =
        useState(false);

    useEffect(() => {
        async function loadProduct() {
            try {
                const data = await getProductById(params.id);

                if (!data.meals || data.meals.length === 0) {
                    throw new Error("Product not found");
                }

                setProduct(data.meals[0]);
            } catch (error) {
                setError(error);
            }
        }

        loadProduct();
    }, [params.id]);

    if (error) {
        return (
            <main className="dish-details">
                <div className="container">
                    <p>{t("dishDetails.error")}</p>
                </div>
            </main>
        );
    }

    if (product === null) {
        return (
            <main className="dish-details">
                <div className="container">
                    <p>{t("dishDetails.loading")}</p>
                </div>
            </main>
        );
    }

    const ingredients = getIngredients(product);

    const visibleIngredients = showAllIngredients
        ? ingredients
        : ingredients.slice(0, 6);

    const tags = product.strTags
        ? product.strTags.split(",")
        : [];

    const price = 24 + (Number(product.idMeal) % 22);

    const categoryKey =
        product.strCategory?.toLowerCase();

    const translatedCategory = t(
        `products.categories.${categoryKey}`,
        {
            defaultValue: product.strCategory || "—",
        },
    );

    return (
        <main className="dish-details">
            <div className="container">
                <button
                    className="dish-details__back"
                    onClick={() => navigate("/products")}
                    type="button"
                >
                    <span aria-hidden="true">←</span>
                    {t("dishDetails.backToMenu")}
                </button>

                <header className="dish-details__hero">
                    <div className="dish-details__eyebrow">
                        <span>
                            {translatedCategory}
                        </span>

                        <i></i>

                        <span>{product.strArea}</span>
                    </div>

                    <h1 className="dish-details__title">
                        {product.strMeal}
                    </h1>

                    <p className="dish-details__intro">
                        {t("dishDetails.intro")}
                    </p>

                    <p className="dish-details__price">
                        €{price}
                    </p>
                </header>

                <div className="dish-details__main-image">
                    <img
                        src={product.strMealThumb}
                        alt={product.strMeal}
                    />

                    <div className="dish-details__image-label">
                        <span>Deliciora</span>

                        <span>
                            {t(
                                "dishDetails.signatureSelection",
                            )}
                        </span>
                    </div>
                </div>

                <section className="dish-details__section dish-details__dish">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            01
                        </span>

                        <div>
                            <span className="dish-details__label">
                                {t(
                                    "dishDetails.dish.label",
                                )}
                            </span>

                            <h2>
                                {t(
                                    "dishDetails.dish.title",
                                )}
                            </h2>
                        </div>
                    </div>

                    <div className="dish-details__section-content">
                        <p>
                            {t(
                                "dishDetails.dish.description",
                                {
                                    meal: product.strMeal,
                                    area:
                                        product.strArea ||
                                        "",
                                },
                            )}
                        </p>
                    </div>
                </section>

                <section className="dish-details__section dish-details__ingredients">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            02
                        </span>

                        <div>
                            <span className="dish-details__label">
                                {t(
                                    "dishDetails.ingredients.label",
                                )}
                            </span>

                            <h2>
                                {t(
                                    "dishDetails.ingredients.title",
                                )}
                            </h2>
                        </div>
                    </div>

                    <div className="dish-details__ingredients-content">
                        <div className="dish-details__ingredients-grid">
                            {visibleIngredients.map(
                                (ingredient) => {
                                    return (
                                        <article
                                            className="dish-details__ingredient"
                                            key={
                                                ingredient.name
                                            }
                                        >
                                            <div className="dish-details__ingredient-image">
                                                <img
                                                    src={
                                                        ingredient.image
                                                    }
                                                    alt={
                                                        ingredient.name
                                                    }
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div className="dish-details__ingredient-info">
                                                <h3>
                                                    {
                                                        ingredient.name
                                                    }
                                                </h3>

                                                {ingredient.measure && (
                                                    <p>
                                                        {
                                                            ingredient.measure
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </article>
                                    );
                                },
                            )}
                        </div>

                        {ingredients.length > 6 && (
                            <button
                                className="dish-details__ingredients-toggle"
                                type="button"
                                onClick={() =>
                                    setShowAllIngredients(
                                        !showAllIngredients,
                                    )
                                }
                            >
                                <span className="dish-details__toggle-line"></span>

                                <span className="dish-details__toggle-text">
                                    {showAllIngredients
                                        ? t(
                                              "dishDetails.showLess",
                                          )
                                        : t(
                                              "dishDetails.ingredients.viewAll",
                                          )}
                                </span>

                                <span
                                    className="dish-details__toggle-icon"
                                    aria-hidden="true"
                                >
                                    {showAllIngredients
                                        ? "−"
                                        : "+"}
                                </span>

                                <span className="dish-details__toggle-line"></span>
                            </button>
                        )}
                    </div>
                </section>

                <section className="dish-details__section dish-details__preparation">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            03
                        </span>

                        <div>
                            <span className="dish-details__label">
                                {t(
                                    "dishDetails.preparation.label",
                                )}
                            </span>

                            <h2>
                                {t(
                                    "dishDetails.preparation.title",
                                )}
                            </h2>
                        </div>
                    </div>

                    <div
                        className={
                            showFullPreparation
                                ? "dish-details__preparation-text is-expanded"
                                : "dish-details__preparation-text"
                        }
                    >
                        <p>
                            {product.strInstructions}
                        </p>

                        <button
                            className="dish-details__preparation-toggle"
                            type="button"
                            onClick={() =>
                                setShowFullPreparation(
                                    !showFullPreparation,
                                )
                            }
                        >
                            <span className="dish-details__toggle-line"></span>

                            <span className="dish-details__toggle-text">
                                {showFullPreparation
                                    ? t(
                                          "dishDetails.showLess",
                                      )
                                    : t(
                                          "dishDetails.preparation.readFull",
                                      )}
                            </span>

                            <span
                                className="dish-details__toggle-icon"
                                aria-hidden="true"
                            >
                                {showFullPreparation
                                    ? "−"
                                    : "+"}
                            </span>

                            <span className="dish-details__toggle-line"></span>
                        </button>
                    </div>
                </section>

                <section className="dish-details__section dish-details__details-section">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            04
                        </span>

                        <div>
                            <span className="dish-details__label">
                                {t(
                                    "dishDetails.details.label",
                                )}
                            </span>

                            <h2>
                                {t(
                                    "dishDetails.details.title",
                                )}
                            </h2>
                        </div>
                    </div>

                    <div className="dish-details__details-grid">
                        <div className="dish-details__detail">
                            <span>
                                {t(
                                    "dishDetails.details.origin",
                                )}
                            </span>

                            <p>
                                {product.strArea || "—"}
                            </p>
                        </div>

                        <div className="dish-details__detail">
                            <span>
                                {t(
                                    "dishDetails.details.category",
                                )}
                            </span>

                            <p>
                                {translatedCategory}
                            </p>
                        </div>

                        {tags.length > 0 && (
                            <div className="dish-details__detail dish-details__detail--tags">
                                <span>
                                    {t(
                                        "dishDetails.details.tags",
                                    )}
                                </span>

                                <div className="dish-details__tags">
                                    {tags.map((tag) => {
                                        return (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default DishDetails;
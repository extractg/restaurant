import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [showAllIngredients, setShowAllIngredients] = useState(false);

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
                    <p>Something went wrong.</p>
                </div>
            </main>
        );
    }

    if (product === null) {
        return (
            <main className="dish-details">
                <div className="container">
                    <p>Loading...</p>
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

    return (
        <main className="dish-details">
            <div className="container">
                <button
                    className="dish-details__back"
                    onClick={() => navigate("/products")}
                    type="button"
                >
                    <span>←</span>
                    Back to Menu
                </button>

                <header className="dish-details__hero">
                    <div className="dish-details__eyebrow">
                        <span>{product.strCategory}</span>
                        <i></i>
                        <span>{product.strArea}</span>
                    </div>

                    <h1 className="dish-details__title">
                        {product.strMeal}
                    </h1>

                    <p className="dish-details__intro">
                        A carefully selected dish prepared with distinctive
                        ingredients and timeless flavours.
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
                        <span>Signature Selection</span>
                    </div>
                </div>

                <section className="dish-details__section dish-details__dish">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            01
                        </span>

                        <div>
                            <span className="dish-details__label">
                                The Dish
                            </span>

                            <h2>Crafted with intention.</h2>
                        </div>
                    </div>

                    <div className="dish-details__section-content">
                        <p>
                            Discover the character of {product.strMeal}, a
                            {product.strArea
                                ? ` ${product.strArea.toLowerCase()}`
                                : ""}{" "}
                            dish built around carefully selected ingredients,
                            balanced flavours and thoughtful preparation.
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
                                Ingredients
                            </span>

                            <h2>What goes into the dish.</h2>
                        </div>
                    </div>

                    <div className="dish-details__ingredients-content">
                        <div className="dish-details__ingredients-grid">
                            {visibleIngredients.map((ingredient) => {
                                return (
                                    <article
                                        className="dish-details__ingredient"
                                        key={ingredient.name}
                                    >
                                        <div className="dish-details__ingredient-image">
                                            <img
                                                src={ingredient.image}
                                                alt={ingredient.name}
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="dish-details__ingredient-info">
                                            <h3>
                                                {ingredient.name}
                                            </h3>

                                            {ingredient.measure && (
                                                <p>
                                                    {ingredient.measure}
                                                </p>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {ingredients.length > 6 && (
                            <button
                                className="dish-details__ingredients-toggle"
                                type="button"
                                onClick={() =>
                                    setShowAllIngredients(
                                        !showAllIngredients
                                    )
                                }
                            >
                                <span className="dish-details__toggle-line"></span>

                                <span className="dish-details__toggle-text">
                                    {showAllIngredients
                                        ? "Show Less"
                                        : "View All Ingredients"}
                                </span>

                                <span className="dish-details__toggle-icon">
                                    {showAllIngredients ? "−" : "+"}
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
                                Preparation
                            </span>

                            <h2>From kitchen to table.</h2>
                        </div>
                    </div>

                    <div className="dish-details__preparation-text">
                        <p>{product.strInstructions}</p>
                    </div>
                </section>

                <section className="dish-details__section dish-details__details-section">
                    <div className="dish-details__section-heading">
                        <span className="dish-details__number">
                            04
                        </span>

                        <div>
                            <span className="dish-details__label">
                                Details
                            </span>

                            <h2>The story behind the plate.</h2>
                        </div>
                    </div>

                    <div className="dish-details__details-grid">
                        <div className="dish-details__detail">
                            <span>Origin</span>
                            <p>{product.strArea || "—"}</p>
                        </div>

                        <div className="dish-details__detail">
                            <span>Category</span>
                            <p>{product.strCategory || "—"}</p>
                        </div>

                        {tags.length > 0 && (
                            <div className="dish-details__detail dish-details__detail--tags">
                                <span>Tags</span>

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
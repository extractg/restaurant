import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

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
        return <p>Something went wrong.</p>;
    }

    if (product === null) {
        return <p>Loading...</p>;
    }

    const ingredients = getIngredients(product);

    const tags = product.strTags
        ? product.strTags.split(",")
        : [];

    return (
        <main className="dish-details">
            <div className="container">
                <h1>{product.strMeal}</h1>

                <img
                    src={product.strMealThumb}
                    alt={product.strMeal}
                />

                <section className="dish-details__ingredients">
                    <h2>Ingredients</h2>

                    <div className="dish-details__ingredients-grid">
                        {ingredients.map((ingredient) => {
                            return (
                                <div
                                    className="dish-details__ingredient"
                                    key={ingredient.name}
                                >
                                    <img
                                        src={ingredient.image}
                                        alt={ingredient.name}
                                    />

                                    <p>{ingredient.name}</p>
                                    <p>{ingredient.measure}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="dish-details__preparation">
                    <h2>Preparation</h2>

                    <p>{product.strInstructions}</p>
                </section>

                <section className="dish-details__details">
                    <h2>Details</h2>

                    <div className="dish-details__details-grid">
                        <div>
                            <span>Origin</span>
                            <p>{product.strArea}</p>
                        </div>

                        <div>
                            <span>Category</span>
                            <p>{product.strCategory}</p>
                        </div>

                        {tags.length > 0 && (
                            <div>
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
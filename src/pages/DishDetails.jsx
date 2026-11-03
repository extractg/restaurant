import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi.js";

function DishDetails() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            try {
                const data = await getProductById(params.id);
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

return (
    <main className="dish-details">
        <div className="container">
            <button className="dish-details__back">
                ← Back to menu
            </button>

            <div className="dish-details__inner">
                <div className="dish-details__image">
                    <img
                        src={product.strMealThumb}
                        alt={product.strMeal}
                    />
                </div>

                <div className="dish-details__content">
                    <span className="dish-details__category">
                        {product.strCategory}
                    </span>

                    <h1 className="dish-details__title">
                        {product.strMeal}
                    </h1>

                    <p className="dish-details__area">
                        {product.strArea} cuisine
                    </p>

                    <p className="dish-details__description">
                        {product.strInstructions}
                    </p>
                </div>
            </div>
        </div>
    </main>
);
}

export default DishDetails;
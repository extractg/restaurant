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
        <main>
            <h1>{product.strMeal}</h1>
            <p>{product.strCategory}</p>
        </main>
    );
}

export default DishDetails;
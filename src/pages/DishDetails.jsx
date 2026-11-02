import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi.js";

function DishDetails() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const data = await getProductById(params.id);
            setProduct(data);
        }

        loadProduct();
    }, [params.id]);
    console.log(product);

    return (
        <main>
            <h1>Dish Details</h1>
            <p>{params.id}</p>
        </main>
    );
}

export default DishDetails;
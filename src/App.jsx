import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Favorites from "./pages/Favorites.jsx";
import DishDetails from "./pages/DishDetails.jsx";

import { getProducts } from "./api/productsApi.js";

const PRODUCTS_CACHE_KEY = "deliciora-products";
const PRODUCTS_CACHE_TIME_KEY = "deliciora-products-time";

const CACHE_DURATION = 60 * 60 * 1000;

function App() {
    const [allProducts, setAllProducts] = useState([]);

    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem("favorites");

            return savedFavorites
                ? JSON.parse(savedFavorites)
                : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((currentFavorites) => {
            if (currentFavorites.includes(id)) {
                return currentFavorites.filter((favoriteId) => {
                    return favoriteId !== id;
                });
            }

            return [...currentFavorites, id];
        });
    };

    useEffect(() => {
        const loadProducts = async () => {
            const cachedProducts =
                localStorage.getItem(PRODUCTS_CACHE_KEY);

            const cachedTime =
                localStorage.getItem(PRODUCTS_CACHE_TIME_KEY);

            if (cachedProducts && cachedTime) {
                try {
                    const parsedProducts =
                        JSON.parse(cachedProducts);

                    const cacheAge =
                        Date.now() - Number(cachedTime);

                    if (
                        Array.isArray(parsedProducts) &&
                        parsedProducts.length > 0
                    ) {
                        setAllProducts(parsedProducts);

                        if (cacheAge < CACHE_DURATION) {
                            return;
                        }
                    }
                } catch {
                    localStorage.removeItem(
                        PRODUCTS_CACHE_KEY
                    );

                    localStorage.removeItem(
                        PRODUCTS_CACHE_TIME_KEY
                    );
                }
            }

            try {
                const categories = [
                    "Beef",
                    "Chicken",
                    "Seafood",
                    "Dessert",
                ];

                const requests = categories.map(
                    (category) => {
                        return getProducts(category);
                    }
                );

                const results = await Promise.all(requests);

                const products = results.flat();

                setAllProducts(products);

                localStorage.setItem(
                    PRODUCTS_CACHE_KEY,
                    JSON.stringify(products)
                );

                localStorage.setItem(
                    PRODUCTS_CACHE_TIME_KEY,
                    Date.now().toString()
                );
            } catch (error) {
                console.error(
                    "Failed to load products:",
                    error
                );
            }
        };

        loadProducts();
    }, []);

    return (
        <>
            <ScrollToTop />

            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={
                        <Products
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            allProducts={allProducts}
                        />
                    }
                />

                <Route
                    path="/products/:id"
                    element={<DishDetails />}
                />

                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            allProducts={allProducts}
                        />
                    }
                />
            </Routes>

            <Footer />

            <BackToTop />
        </>
    );
}

export default App;
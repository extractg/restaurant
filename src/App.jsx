import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./pages/Products.jsx";
import Favorites from "./pages/Favorites.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "./api/productsApi.js";

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(
                favorites.filter((favoriteId) => {
                    return favoriteId !== id;
                })
            );
        } else {
            setFavorites([...favorites, id]);
        }
    };
      useEffect(() => {
              const loadProducts = async () => {
                const categories = ["Beef", "Chicken", "Seafood", "Dessert"];
    
                const requests = categories.map((category) => {
                  return getProducts(category);
                });
                const results = await Promise.all(requests);
                const products = results.flat();
                setAllProducts(products);
    
              };
    
              loadProducts();
            }, []);
    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
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
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { getProducts } from "../api/productsApi.js";

function Products() {
    const [allProducts, setAllProducts] = useState([]);
  return (
    <section className="products">
      <div className="container">

        <div className="products__header">
          <span className="products__label">Our Menu</span>

          <h1 className="products__title">
            Discover Our Dishes
          </h1>

          <p className="products__text">
            Explore our selection of carefully crafted dishes,
            prepared with fresh ingredients and inspired by flavors
            from around the world.
          </p>
        </div>

        <div className="products__controls">

          <div className="products__search">
            <input
              type="text"
              className="products__search-input"
              id="searchInput"
              placeholder="Search dishes..."
              autoComplete="off"
            />

            <button
              className="products__search-button"
              type="button"
              aria-label="Search dishes"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="products__categories">
            <button
              className="products__category active"
              data-category="all"
            >
              All
            </button>

            <button
              className="products__category"
              data-category="Beef"
            >
              Beef
            </button>

            <button
              className="products__category"
              data-category="Chicken"
            >
              Chicken
            </button>

            <button
              className="products__category"
              data-category="Seafood"
            >
              Seafood
            </button>

            <button
              className="products__category"
              data-category="Dessert"
            >
              Dessert
            </button>
          </div>

        </div>

        <div
          className="products__status"
          id="productsStatus"
        ></div>

        <div
          className="products__grid"
          id="productsGrid"
        >
          {/* Здесь позже будем выводить DishCard через React */}
        </div>

      </div>
    </section>
  );
}

export default Products;
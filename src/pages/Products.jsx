  import { useState, useEffect } from "react";
  import ProductCard from "../components/ProductCard.jsx";
  import { getProducts } from "../api/productsApi.js";

  function Products({ favorites, toggleFavorite }) {
      const [allProducts, setAllProducts] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState("all");
      const [searchTerm, setSearchTerm] = useState("");
      
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
        const filteredProducts = 
        selectedCategory === "all" ? allProducts : allProducts.filter((product) =>{
          return product.category === selectedCategory;
        });
        const searchedProducts = filteredProducts.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        });
        
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
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
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
                className={
                  selectedCategory === "all"
                    ? "products__category active"
                    : "products__category"
                }
                data-category="all"
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>

              <button
                className={
                  selectedCategory === "Beef"
                    ? "products__category active"
                    : "products__category"
                }
                onClick={() => setSelectedCategory("Beef")}
              >
                Beef
              </button>

              <button
                className={
                  selectedCategory === "Chicken"
                    ? "products__category active"
                    : "products__category"
                }
                data-category="Chicken"
                onClick={() => setSelectedCategory("Chicken")}
              >
                Chicken
              </button>

              <button
                className={
                  selectedCategory === "Seafood"
                    ? "products__category active"
                    : "products__category"
                }
                data-category="Seafood"
                onClick={() => setSelectedCategory("Seafood")}
              >
                Seafood
              </button>

              <button
                className={
                  selectedCategory === "Dessert"
                    ? "products__category active"
                    : "products__category"
                }
                data-category="Dessert"
                onClick={() => setSelectedCategory("Dessert")}
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
            {searchedProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  category={product.category}
                  price={product.price}
                  onFavoriteClick={toggleFavorite}
                  isFavorite={favorites.includes(product.id)}
                />
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  export default Products;
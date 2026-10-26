import ProductCard from "../components/ProductCard.jsx";
function Favorites({favorites, toggleFavorite, allProducts}) {
    const favoriteProducts = allProducts.filter((product) => {
        return favorites.includes(product.id)
    })
    return (
        <main>
            <h1>Favorites</h1>

            <div>
                {favoriteProducts.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            category={product.category}
                            price={product.price}
                            image={product.image}
                            isFavroite={true}
                            onFavoriteClick={toggleFavorite}
                        />
                    );
                })}
            </div>
        </main>
    );
}

export default Favorites;
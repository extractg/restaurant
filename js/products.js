const productsGrid = document.getElementById("productsGrid");
const categoryButtons = document.querySelectorAll(".products__category");
const searchInput = document.getElementById("searchInput");


function displayProducts(productsArray) {
    const productsHTML = productsArray.map((product) => {
        const { id, title, price, category, image } = product;
        const isFavorite = favorites.includes(id)
        

        return `
            <article class="product-card">

                <div class="product-card__image">
                    <img src="${image}" alt="${title}" loading="lazy">

                    <button class="product-card__favorite ${isFavorite ? "active" : ""} " data-id="${id}">
                        <i class="${isFavorite ? "fa-solid" : "fa-regular"} fa-regular fa-heart"></i>
                    </button>
                </div>

                <div class="product-card__content">
                    <span class="product-card__category">
                        ${category}
                    </span>

                    <h2 class="product-card__title">
                        ${title}
                    </h2>

                    <span class="product-card__price">
                        €${price}
                    </span>
                </div>

            </article>
        `;
    }).join("");

    productsGrid.innerHTML = productsHTML;
}
let allProducts = [];
let selectedCategory = "all";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

categoryButtons.forEach((button) =>{
    button.addEventListener("click", () =>{

        selectedCategory = button.dataset.category;
        categoryButtons.forEach((categoryButton) => {
            categoryButton.classList.remove("active");
        });

        button.classList.add("active");
        if (selectedCategory === "all") {
            displayProducts(allProducts)
            return;
        }

        const filteredProducts = allProducts.filter((product) => {
           return product.category === selectedCategory
        });

        displayProducts(filteredProducts)
    });
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    let productsToSearch = allProducts;

    if (selectedCategory !== "all"){
        productsToSearch = allProducts.filter((product) => {
            return product.category === selectedCategory
        });
    }
    const searchedProducts = productsToSearch.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm);
    });
    displayProducts(searchedProducts);
    
});
productsGrid.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest(".product-card__favorite");

    if (!favoriteButton) {
        return;
    }

    const mealId = favoriteButton.dataset.id;
    const favoriteIcon = favoriteButton.querySelector(".fa-heart");

    if (!favorites.includes(mealId)) {
        favorites.push(mealId);

        favoriteIcon.classList.remove("fa-regular");
        favoriteIcon.classList.add("fa-solid");
        favoriteButton.classList.add("active");
    } else {
        favorites = favorites.filter((id) => {
            return mealId !== id;
        });
        favoriteIcon.classList.remove("fa-solid");
        favoriteIcon.classList.add("fa-regular");
        favoriteButton.classList.remove("active");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
});

async function initProducts() {
    const categories = [
        "Beef",
        "Chicken",
        "Seafood",
        "Dessert"
    ];

    const requests = categories.map((category) => {
        return getProducts(category);
    });

    const results = await Promise.all(requests);
    allProducts = results.flat();
    displayProducts(allProducts);
}

initProducts();
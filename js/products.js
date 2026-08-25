const productsGrid = document.getElementById("productsGrid");
const categoryButtons = document.querySelectorAll(".products__category");
const searchInput = document.getElementById("searchInput");


function displayProducts(productsArray) {
    const productsHTML = productsArray.map((product) => {
        const { title, price, category, image } = product;

        return `
            <article class="product-card">

                <div class="product-card__image">
                    <img src="${image}" alt="${title}" loading="lazy">

                    <button class="product-card__favorite">
                        <i class="fa-regular fa-heart"></i>
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

        const filtererdProducts = allProducts.filter((product) => {
           return product.category === selectedCategory
        });

        displayProducts(filtererdProducts)
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
const productsGrid = document.getElementById("productsGrid");
const products = [
    {
        title: "Ribeye",
        price: 50,
        category: "meat",
        image: "../assets/images/Ribeye_Steak.png"
    },
        {
        title: "Pan-Seared Salmon",
        price: 38,
        category: "seafood",
        image: "../assets/images/Pan_Seared_Salmon.png"
    }
];

function displayProducts(productsArray) {
    productsGrid.innerHTML = "";

productsArray.forEach((product) => {
    const { title, price, category, image } = product;
    productsGrid.innerHTML += `
        <article class="product-card">

            <div class="product-card__image">
                <img src="${image}" alt="${title}">

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
    
})};
async function initProducts() {
 const products = await getProducts()
 displayProducts(products);
}
initProducts();

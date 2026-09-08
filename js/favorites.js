const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesEmpty = document.getElementById("favoritesEmpty");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function getMealById(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();

    return data.meals[0];
}

async function getFavoriteMeals() {
    const meals = await Promise.all(
        favorites.map((id) => {
            return getMealById(id);
        })
    );

    return meals;
}

function displayFavorites(meals) {

    meals.forEach((meal) => {
        const { strMeal } = meal;
        const card = `
            <article class="favorite-card">
                <h2 class="product-card__title">
                        ${strMeal}
                    </h2>
            </article>
        `;
    })
}



async function initFavorites() {
    const meals = await getFavoriteMeals();
    displayFavorites(meals);
    console.log(meals) 
}
initFavorites();

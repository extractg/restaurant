async function getProducts() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

    const response = await fetch(url);
    const data = await response.json();

    const products = data.meals.map((meal) => {
        const mealId = Number(meal.idMeal);
        const price = 24 + (mealId % 22);
        return {
            id: meal.idMeal,
            title: meal.strMeal,
            category: "Beef",
            image: meal.strMealThumb,
            price,
        };
    });

    return products;
}

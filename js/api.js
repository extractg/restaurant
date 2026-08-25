async function getProducts(category) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const response = await fetch(url);
    const data = await response.json();

    const filteredMeals = data.meals.filter((meal) => {
        return !excludedMealIds.includes(meal.idMeal);
    });

    const limitedMeals = filteredMeals.slice(0, 30);

    const products = limitedMeals.map((meal) => {
        const mealId = Number(meal.idMeal);
        const price = 24 + (mealId % 22);

        return {
            id: meal.idMeal,
            title: meal.strMeal,
            category,
            image: meal.strMealThumb,
            price,
        };
    });

    return products;
}

const excludedMealIds = [
    "53483",
    "52997",
    "53300",
    "53317",
    "53455",
    "53120",
    "53276",
    "53406",
    "53522",
    "53281"
];
const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesEmpty = document.getElementById("favoritesEmpty");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

# Deliciora

A modern, responsive restaurant website built with React and Vite.

Deliciora combines an elegant restaurant-inspired interface with dynamic menu data, favorites, multilingual support, smooth animations, and responsive interactions.

🌐 [Live Website](https://deliciora.eu)  
💻 [GitHub Repository](https://github.com/extractg/restaurant)

---

## About the Project

Deliciora is a frontend restaurant web application designed to provide a polished and intuitive browsing experience across desktop, tablet, and mobile devices.

The project was built as a portfolio project with a focus on React architecture, reusable components, API integration, responsive design, localization, state management, performance optimization, and modern UI interactions.

---

## Features

- Responsive design for desktop, tablet, and mobile
- Dynamic restaurant menu powered by TheMealDB API
- Search dishes by name
- Filter dishes by category
- Dynamic dish detail pages
- Favorites system with persistent storage
- English and Latvian localization
- First-visit language selection modal
- Saved language preference using localStorage
- Product data caching using localStorage
- Smooth scrolling
- Interactive animations and transitions
- Responsive dish slider
- Mobile navigation menu
- Back-to-top functionality
- Optimized WebP image assets

---

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

### Libraries

- React Router
- i18next
- react-i18next
- Motion
- Swiper
- Lenis
- Font Awesome

### API

- TheMealDB API

---

## Technical Highlights

### API Integration

Menu data is loaded dynamically from TheMealDB API and transformed into the structure used by the application.

Multiple food categories are loaded and combined into a single product collection.

### Product Caching

Product data is cached in `localStorage` to reduce unnecessary API requests.

The application checks the age of cached data and refreshes it when the cache expires.

### Favorites

Users can add and remove dishes from their favorites.

Favorite dish IDs are stored in `localStorage`, allowing the selection to persist after refreshing or reopening the website.

### Dynamic Routing

React Router is used for navigation between the main pages and dynamic dish routes.

Example:

```text
/products/:id
```

Each dish detail page loads information based on its route parameter.

### Localization

The interface supports:

- English
- Latvian

Localization is implemented using `i18next` and `react-i18next`.

On the first visit, users can select their preferred language through a custom language modal. The selected language is stored locally and automatically restored on future visits.

The language can also be changed at any time using the EN / LV switch in the header.

### Responsive UI

The interface was designed with responsive layouts and breakpoints to provide a consistent experience across different screen sizes.

Navigation, menu grids, content sections, sliders, typography, and spacing adapt to desktop, tablet, and mobile devices.

---

## Performance & Optimization

Several optimizations were implemented during development:

- Converted large PNG photography assets to WebP
- Reduced image sizes while preserving visual quality
- Optimized favicon assets
- Removed unused assets and development dependencies
- Cached API product data to reduce unnecessary requests
- Minified production assets through Vite
- Verified code quality with ESLint
- Tested optimized production builds

---

## Project Structure

```text
src/
├── api/
├── assets/
│   └── images/
├── components/
├── css/
├── i18n/
│   └── locales/
├── pages/
├── App.jsx
└── main.jsx

public/
└── favicon.png
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/extractg/restaurant.git
```

### Open the project

```bash
cd restaurant
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development server will start locally using Vite.

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Code Quality

Run ESLint:

```bash
npm run lint
```

The project uses ESLint to help maintain consistent and clean JavaScript and React code.

---

## Future Improvements

Possible future improvements include:

- Backend integration
- User authentication
- Online reservations
- Shopping cart and ordering functionality
- Additional localized menu content

---

## Author

**Antons Mavrenkovs**

Frontend Developer

- 🌐 [Deliciora](https://deliciora.eu)
- 💻 [GitHub](https://github.com/extractg)

## License

© 2026 Antons Mavrenkovs. All rights reserved.

This project was created as a personal portfolio project.  
The source code may be viewed for educational and evaluation purposes, but copying, redistribution, modification, or use of substantial portions of the project without permission is not allowed.
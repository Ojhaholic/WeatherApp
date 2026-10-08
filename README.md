# 🌤️ Weather Dashboard

Hi there! 👋 Welcome to my very first React project! 

I built this Weather Dashboard while learning the fundamentals of React. It's a simple, clean web application that allows you to search for any city in the world and instantly get the current weather conditions. 

## ✨ Features

- **City Search:** Type in the name of a city and press Enter or click Search.
- **Live Weather Data:** Displays the current temperature, humidity, "feels like" temperature, and wind speed.
- **Error Handling:** Shows a friendly error message if the city isn't found or the API request fails.
- **Responsive & Clean UI:** Built with custom Vanilla CSS for a neat look.

## 🧠 What I Learned

Building this project was a huge stepping stone for me. Here are the core React and web development concepts I learned and applied:

- **React Components:** Breaking down the UI into modular, reusable pieces like `<SearchBar />` and `<WeatherCard />`.
- **State Management (`useState`):** Managing dynamic data like the user's input (`city`), the fetched data (`weather`), loading spinners (`loading`), and error states (`error`).
- **Props:** Passing data from the parent component to child components (e.g., passing the weather data and city name down to the `WeatherCard` component).
- **API Fetching & Async/Await:** Making real network requests to external APIs using modern JavaScript asynchronous functions.
- **Chaining APIs:** I learned how to first call the Open-Meteo Geocoding API to get a city's latitude and longitude, and then immediately pass those coordinates to the Weather API to fetch the actual forecast. 
- **Conditional Rendering:** Using JavaScript logic inside JSX to show a "Loading..." text while fetching data, display an error card if something goes wrong, or render the weather card only when data is successfully loaded.
- **Event Handling:** Capturing user typing (`onChange`), button clicks (`onClick`), and keyboard presses (checking for `e.key === "Enter"`).

## 🛠️ Tech Stack

- **React** (Bootstrapped with [Vite](https://vitejs.dev/))
- **Vanilla CSS** for styling
- **[Open-Meteo API](https://open-meteo.com/)** for both Geocoding and Weather data (it's awesome because it's free and requires no API keys!)

## 🚀 How to run this locally

If you want to check out the code and run it yourself:

1. Clone the repository.
2. Run `npm install` in the project directory to install dependencies.
3. Run `npm run dev` to start the local development server.

---
*This is just the beginning of my React journey. Thanks for stopping by!*

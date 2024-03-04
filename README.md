# See deployment of the site here: [zetoweather.netlify.app](https://zetoweather.netlify.app/)

This web application was designed with responsiveness in mind - for mobile, tablet, and desktop.

**Overview:** This web application utilizes the OpenWeather API in order to fetch weather data in JSON format and display it to the user within an accessible format.

Additionally, this weather application utilizes Tanstack Query for asynchronous data fetching, and Emotion for CSS within JS, which allows for dynamic theming and light mode/dark mode functionality.

**Installation:**

- Clone the repo source into an IDE such as VS Code
- `npm install` into the root
- `npm run dev`

By following the steps above, you will be able to see the web application running locally.
Recall, you can also view the web app online at [zetoweather.netlify.app](https://zetoweather.netlify.app/)

**Usage:** This application is designed such that a user may retrieve current weather conditions, as well as a five day forecast (at three hour intervals), and sixteen day forecast for their city. The data rendered is provided by the OpenWeather API.

**Technologies:** This web app was built utilizing React + Vite. Libraries utilized within development include:

- TanStack Query for asynchronous data fetching
- React-Router for routing
- Leaflet/React-leaflet for display of current city as a map
- Emotion for CSS in JS
- React-fontawesome for some SVG's (whereas the rest were imported)

**Project Structure:** This web application follows an easy to understand structure, as follows:

- /src/, contains `main.jsx`, as well as necessary components for modular development.

**Contact:** arizetocs@gmail.com

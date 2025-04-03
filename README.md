# Weather App

A simple weather application that displays current weather conditions for any city using the WeatherAPI.

## Features

- Real-time weather data
- Temperature in Celsius
- Humidity percentage
- Wind speed
- UV index
- "Feels like" temperature
- Weather condition icon

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A WeatherAPI key (get it from [weatherapi.com](https://www.weatherapi.com/))

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DebojyotiMishra/weather-app-vanilla-js.git
   cd weather-app-vanilla-js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your WeatherAPI key:
   ```
   WEATHER_API_KEY=your_api_key_here
   DEFAULT_CITY=Paris
   ```

   Replace `your_api_key_here` with your actual WeatherAPI key and set your preferred default city.

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Environment Variables

The application uses the following environment variables:

- `WEATHER_API_KEY`: Your WeatherAPI key (required)
- `DEFAULT_CITY`: The default city to show weather for (optional, defaults to Paris)

## Project Structure

```
weather-app-vanilla-js/
├── .env                 # Environment variables
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore file
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── README.md           # This file
├── script.js           # Main JavaScript file
└── server.js           # Express server
```

## Security Notes

- Never commit your `.env` file to version control
- Keep your API key secure and don't share it publicly
- The `.env` file is included in `.gitignore` to prevent accidental commits

## License

ISC

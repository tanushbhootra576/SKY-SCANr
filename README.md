# 🌦️ Weather & Culture Recommender

This React project displays weather data and gives personalized **food** and **music** recommendations based on the **current weather** and **location** using **Google Gemini AI**.

## 🚀 Features

-  User inputs any city name.
-  Fetches real-time weather data for the city.
-  Uses **Gemini AI (Google GenAI)** to:
  - Recommend a **local food dish** based on city & weather.
  - Recommend a **song** to match the weather.
  - Provide a **motivational quote or fun compliment**.
- 🎵 Links to **YouTube** search for recommended music.
- 🌤️ Changes background images dynamically based on the current weather.

## 🧠 Technologies Used

- **React**
- **Google GenAI (Gemini) API**
- **OpenWeather API** for real-time weather data
- **CSS for styling and animations**

## 📂 File Structure

```
src/
│
├── components/
│   ├── WeatherCard.jsx     # Main component for weather and city input
│   ├── DisplayCard.jsx     # Fetches and shows Gemini AI recommendations
│   └── WeatherCard.css     # WeatherCard styles
│   └── aicard.css          # DisplayCard styles
│
└── App.jsx                 # Renders the main WeatherCard
```

##  How It Works

1. **User inputs city name.**
2. Weather data is fetched using the **OpenWeather API**.
3. Weather conditions and city name are passed to `DisplayCard`.
4. `DisplayCard` sends a prompt to Gemini AI:
   - Gemini responds with JSON: `food`, `music`, `YouTube link`, `quote`, and `city`.
5. Output is displayed with:
   - Food recommendation
   - Song recommendation + YouTube button
   - Compliment or motivational quote
   - Matching background animation for the weather

##  API Configuration

### Environment Variables

Create a `.env` file in your project root with:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

The app uses **OpenWeather's Current Weather Data API**:
- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- Data includes `temperature`, `description`, `icon`, and more.

## 🧪 Example JSON Response from Gemini AI

```json
{
  "city": "Mumbai",
  "food": "Vada Pav",
  "music": "Raindrops Keep Falling on My Head",
  "link": "https://youtube.com/search?v=Raindrops",
  "compliment": "You're as vibrant as Mumbai’s monsoon vibes!"
}
```

## 🖼️ Background Image Handling

The app dynamically changes the background image based on the current weather condition using a predefined `backgroundMap` object.

For example:
- `clear sky` → sunny background
- `rain` → rainy animation
- `thunderstorm` → stormy animation

### 🌙 Fallback for Night

If the weather data indicates **nighttime**, the app retains the **same background as the corresponding weather condition** (e.g., clear sky → sunny background), ensuring continuity without using a separate night-themed background.

## 🛠️ Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Add your Gemini and OpenWeather API keys to `.env`
4. Run `npm run dev` to start the app

## 📌 To Do

- Add proper error handling for invalid cities.
- Integrate real YouTube video links instead of search results.
- Add loading animations and fallback designs.
- Expand weather-to-image mapping.


## Contributing
Feel free to fork this project, make enhancements, and open pull requests!

### ✨ Developed by Tanush Bhootra
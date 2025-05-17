import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

const App = () => {
  return (
    <div className="app-container">
      <h1 className='h1'>SKY-SCANr</h1>
      <WeatherCard />
      <div className="abtdiv">The weather data is from OpenWeather</div>
    </div>
  );
};

export default App;

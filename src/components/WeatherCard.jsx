import React, { useEffect, useRef, useState } from 'react';
import './WeatherCard.css';
import DisplayCard from './DisplayCard';

const WeatherCard = () => {

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(null);


    const backgroundMap = {
        "thunderstorm with light rain": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm with rain": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm with heavy rain": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "light thunderstorm": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "heavy thunderstorm": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "ragged thunderstorm": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm with light drizzle": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm with drizzle": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",
        "thunderstorm with heavy drizzle": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",

        "light intensity drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "heavy intensity drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "light intensity drizzle rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "drizzle rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "heavy intensity drizzle rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "shower rain and drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "heavy shower rain and drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "shower drizzle": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",

        "light rain": "https://media1.tenor.com/m/zzpHIsk_bgQAAAAd/rain-glass.gif",
        "moderate rain": "https://cdn.pixabay.com/animation/2023/02/25/01/14/01-14-55-999_512.gif",
        "heavy intensity rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "very heavy rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "extreme rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "freezing rain": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "light intensity shower rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "shower rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "heavy intensity shower rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "ragged shower rain": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",

        "light snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "heavy snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "sleet": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "light shower sleet": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "shower sleet": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "light rain and snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "rain and snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "light shower snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "shower snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",
        "heavy shower snow": "https://cdn.pixabay.com/animation/2022/12/12/16/14/16-14-10-94_512.gif",

        "mist": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "smoke": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "haze": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "sand/dust whirls": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "fog": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "sand": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "dust": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "volcanic ash": "https://cdn.pixabay.com/animation/2023/04/16/09/04/09-04-33-27_512.gif",
        "squalls": "https://cdn.pixabay.com/animation/2023/04/01/07/25/07-25-42-814_512.gif",
        "tornado": "https://cdn.pixabay.com/animation/2023/01/09/08/09/08-09-30-292_512.gif",

        "clear sky": "https://cdn.pixabay.com/animation/2023/03/11/17/29/17-29-27-410_512.gif",
        "few clouds": "https://cdn.pixabay.com/animation/2023/02/16/14/40/14-40-49-756_512.gif",
        "scattered clouds": "https://cdn.pixabay.com/animation/2023/03/11/17/29/17-29-27-410_512.gif",
        "broken clouds": "https://j.gifs.com/yalkdM.gif",
        "overcast clouds": "https://cdn.pixabay.com/animation/2022/11/23/14/29/14-29-43-264_512.gif"
    };

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_ID}&units=metric`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.cod !== 200) {
                alert("Location not found: " + data.message);
                return;
            }


            console.log("Weather data:", data);


            setWeatherData({
                temperature: Math.floor(data.main.temp),
                feelslike: Math.floor(data.main.feels_like),
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                rain: data.rain?.["1h"] || 0,
                description: data.weather[0].description,
                place: data.name,
                windSpeed: data.wind.speed,
                visibility: (data.visibility / 1000).toFixed(1),
                sunrise: formatTime(data.sys.sunrise),
                sunset: formatTime(data.sys.sunset),
                icon: data.weather[0].icon
            });

        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    };

    useEffect(() => {
        search("Delhi");
    }, []);
    // console.log(weatherData)

    const bgImageUrl = weatherData ? backgroundMap[weatherData.description.toLowerCase()] || backgroundMap["clear sky"]
        : "";

    return (
        <div className="theMain">

            <div className="card">
                <div className="form-line">
                    <label htmlFor="location">
                        <img src="data:image/png;base64,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" alt="gloab" className="icon" />


                    </label>
                    <input ref={inputRef} type="text" id="location" placeholder="City Name" />
                    <button type="submit" onClick={() => search(inputRef.current.value)}>🔍</button>
                </div>
                {weatherData && (
                    <div className="weatherData">
                        <div className='dis'>
                      
                            <h3 className="wC" style={{ backgroundImage: `url(${bgImageUrl})` }}>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Temperature" className="icon" /><br />
                                {weatherData.description}<br />
                            </h3>

                            <div className='temploc'>
                                <h2 className='loc'>&nbsp;
                                    
                                    
                                    {/* <img src="/public/icons/loc.gif" alt="Temperature" className="icon" /> */}
                                    
                                    
                                    {weatherData.place}</h2>
                                <span className="temp" >Temperature&nbsp;&nbsp;
                                    <span className="tempvalue">{weatherData.temperature}°C</span></span>
                                <span className="temp">Feels like <span className='feel'> &nbsp;&nbsp;{weatherData.feelslike}°C</span></span>
                            </div>
                        </div>



                        <div className="weatherGrid">
                            <div className="gridItem">
                                <img src="/icons/wind.gif" alt="Temperature" className="icon" />
                                <div>
                                    <span className="label">Wind Speed</span>
                                    <span className="value">{weatherData.windSpeed}m/s</span>
                                </div>
                            </div>
                            <div className="gridItem">
                                <img src="/icons/visi.gif" alt="Temperature" className="icon" />
                                <div>
                                    <span className="label">Visibility</span>
                                    <span className="value">{weatherData.visibility} km</span>
                                </div>
                            </div>
                            <div className="gridItem">
                                <img src="/icons/humid.gif" alt="Humidity" className="icon" />
                                <div>
                                    <span className="label">Humidity</span>
                                    <span className="value">{weatherData.humidity}%</span>
                                </div>
                            </div>
                            <div className="gridItem">
                                <img src="/icons/meter.gif" alt="Pressure" className="icon" />
                                <div>
                                    <span className="label">Pressure</span>
                                    <span className="value">{weatherData.pressure} hPa</span>
                                </div>
                            </div>
                            <div className="gridItem">
                                <img src="/icons/rise.gif" alt="Sunrise" className="icon" />
                                <div>
                                    <span className="label">Sunrise</span>
                                    <span className="value">{weatherData.sunrise}</span>
                                </div>
                            </div>
                            <div className="gridItem">
                                <img src="/icons/sunset.gif" alt="Sunset" className="icon" />
                                <div>
                                    <span className="label">Sunset</span>
                                    <span className="value">{weatherData.sunset}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {weatherData && (
                <div className="display-card">
                    <DisplayCard name={weatherData.place} weather={weatherData.description} />
                </div>
            )}

        </div>


    );
};

export default WeatherCard;


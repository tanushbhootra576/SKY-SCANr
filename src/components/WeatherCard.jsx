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
                        <img src="/public/icons/gloab.gif" alt="gloab" className="icon" />


                    </label>
                    <input ref={inputRef} type="text" id="location" placeholder="City Name" />
                    <button type="submit" onClick={() => search(inputRef.current.value)}>🔍</button>
                </div>
                {weatherData && (
                    <div className="weatherData">
                        <div className='dis'>
                            {/* <h3 className="wC">{weatherData.description}</h3> */}

                            <h3 className="wC" style={{ backgroundImage: `url(${bgImageUrl})` }}>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="Temperature" className="icon" /><br />
                                {weatherData.description}<br />
                            </h3>

                            <div className='temploc'>
                                <h2 className='loc'>&nbsp;<img src="/public/icons/loc.gif" alt="Temperature" className="icon" />{weatherData.place}</h2>
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

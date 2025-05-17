import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

import './aicard.css'
const DisplayCard = ({ name, weather }) => {
    const [recommendation, setRecommendation] = useState(null);

    useEffect(() => {
        const ai = new GoogleGenAI({
            apiKey: import.meta.env.VITE_GEMINI_API_KEY
        });

        const fetchRecommendation = async () => {
            try {
                const response = await ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: `
Give me the best local food dish and a song that fits the current weather.
suggest me food on first prefrence of weather then the place and same for the music.
City: ${name}
Weather: ${weather}

Return a valid JSON object like:
{
  "city": "user city name",
  "food": "local famous accordding to weather dish name",
  "music": "music name",
  "link": "youtube link",
  "compliment":"small sentence complement for the person  or motivation quatoe or a small motivaiting joke"
}

Don't use the same answer every time. Tailor it to the city and weather. Only return raw JSON — no code block or extra text.
          `
                });

                const extractPureJSON = (str) =>
                    str.replace(/```json/g, '').replace(/```/g, '').trim();

                const c = response.text;
                const cleanJSON = extractPureJSON(c);
                const json = JSON.parse(cleanJSON);

                setRecommendation(json);
            } catch (error) {
                console.error("Error generating content:", error);
            }
        };

        if (name && weather) {
            fetchRecommendation();
        }
    }, [name, weather]);

    if (!recommendation) {
        return <p>Loading recommendation for {name}...</p>;
    }

    return (
        <div >
            <h2>Recommendation for {recommendation.city || name}</h2><br />
            <p><strong>Food:</strong> {recommendation.food}</p>
            <div className='abrakadabra'><br />
                <p>{recommendation.compliment}</p>
                <p><strong>Music:</strong> {recommendation.music}</p>
                <img
                    src="/icons/music.gif"
                    alt="Music Icon"
                    className="music-icon"
                /><br />
                <div className="link-container">
                    <a
                        href={`https://www.youtube.com/results?search_query=${recommendation.music}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-button"
                    >
                        Listen on YouTube
                    </a>

                </div>
            </div>
        </div >
    );
};

export default DisplayCard;


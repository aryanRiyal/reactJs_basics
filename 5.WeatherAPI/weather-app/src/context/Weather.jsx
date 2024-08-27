import React, { createContext, useContext, useState } from 'react';
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api/index';

const WeatherContext = createContext(null);

export const useWeather = function () {
    return useContext(WeatherContext);
};

export const WeatherProvider = function (props) {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const fetchData = async function () {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    };

    const fetchCurrentUserLocationData = function () {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const response = await getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            );
            setData(response);
        });
    };

    return (
        <WeatherContext.Provider
            value={{ data, searchCity, setSearchCity, fetchData, fetchCurrentUserLocationData }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};

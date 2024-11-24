const baseURL = 'https://api.weatherapi.com/v1/current.json?key=4772d8b5eb6d49a0a26142249242408';

const airQualityIndex = '&aqi=yes';

export const getWeatherDataForCity = async function (city) {
    const weatherAPI = `${baseURL}&q=${city}${airQualityIndex}`;
    const response = await fetch(weatherAPI);
    console.log(weatherAPI);
    return await response.json();
};

export const getWeatherDataForLocation = async function (lat, lon) {
    const response = await fetch(`${baseURL}&q=${lat},${lon}${airQualityIndex}`);
    return await response.json();
};

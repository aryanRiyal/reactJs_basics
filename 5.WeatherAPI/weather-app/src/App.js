import { useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';

import './App.css';

function App() {
    const weather = useWeather();

    useEffect(() => {
        weather.fetchCurrentUserLocationData();
    }, []);

    return (
        <div className='App'>
            <h1>Weather Forecast</h1>
            <Input />
            <Button onClick={weather.fetchData} value='Search' />
            <Card />
            {/* <Button onClick={weather.fetchData} value='Refresh' /> */}
        </div>
    );
}

export default App;

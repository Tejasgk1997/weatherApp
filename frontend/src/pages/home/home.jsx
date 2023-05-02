import { useState } from 'react';
import Header from '../../components/header';
import HomeSearch from './HomeSearch';
import WeatherCard from './WeatherCard';

import './home.scss';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    return (<main className='h-100'>
        <Header />
        <HomeSearch setWeatherData={setWeatherData} />
        <WeatherCard weatherData={weatherData} />
    </main>);
}

export default Home;
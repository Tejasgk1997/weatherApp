import { BsFillCloudFogFill, BsFillCloudDrizzleFill, BsFillCloudLightningRainFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { RiMoonCloudyLine } from 'react-icons/ri';
import { TbWind } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';

const weatherImageSize = '85'

const getWeatherImage = (weatherType) => {
    switch (weatherType) {
        case 'Clouds':
            return <RiMoonCloudyLine size={weatherImageSize} />
        case 'Clear':
            return <FaSun size={weatherImageSize} />
        case 'Rain':
            return <BsFillCloudLightningRainFill size={weatherImageSize} />
        case 'Drizzle':
            return <BsFillCloudDrizzleFill size={weatherImageSize} />
        default:
            return <BsFillCloudFogFill size={weatherImageSize} />
    }

}

const WeatherCard = ({ weatherData }) => {
    if (weatherData)
        return (<div className="weather-card-container">
            <div className="weather-card">

                <div className="row my-5">
                    <div className="col">
                        {getWeatherImage(weatherData.weather[0].main)}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h1 className='text-white'>{weatherData.main.temp}°C</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>{weatherData.name}</h3>
                    </div>
                </div>
                <div className='row align-items-center m-0 mt-5'>
                    <div className="col text-end pe-0">
                        <WiHumidity size='75' />
                    </div>
                    <div className='col-auto ps-0'>
                        <h5 className='text-white m-0'>{weatherData.main.humidity} %</h5>
                        <p className='fw-bold'>Humidity</p>
                    </div>


                    <div className='col-auto'>
                        <TbWind size='72' />
                    </div>
                    <div className="col text-start">
                        <h5 className='text-white m-0'>{weatherData.wind.speed} km/h</h5>
                        <p className='fw-bold'>Wind Speed</p>
                    </div>

                </div>
            </div>
        </div>);

    return <div className="weather-card-container">
        <h1 className="text-danger">No data</h1>

    </div>
}

export default WeatherCard;
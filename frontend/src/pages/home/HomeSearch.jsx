import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const getWeatherByCity = (cityName) => {
  return axios.get(`http://localhost:5000/getWeatherByCityName/${cityName}`);
};

const HomeSearch = ({ setWeatherData }) => {
  const [cityName, setCityName] = useState('Bengaluru');
  const { refetch } = useQuery({
    queryKey: ["getWeatherByCity"],
    queryFn: () => getWeatherByCity(cityName),
    onSuccess: ({ data }) => {
      setWeatherData(data.cod === '404' ? null : data)
    }
  });

  const handleKeyPress = ({ key }) => {
    if (cityName && key === 'Enter')
      refetch(cityName)
  }

  return (
    <section className="home-search-container">
      <input type="search" placeholder="Search..." className="form-control" style={{ width: '50%' }} value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyPress} />
    </section>
  );
};

export default HomeSearch;

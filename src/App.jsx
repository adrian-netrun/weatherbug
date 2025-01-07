import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css'
import NavBar from './components/Navbar';
import CityInfo from './components/CityInfo';
import Footer from './components/Footer';
import SearchBar from "./components/SearchBar.jsx";
import Error from "./components/Error.jsx";

function App() {

  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({})
  const [error, setError] = useState('')

  async function initFetchData(url, key) {

  const completeLocation = `${url}?key=${key}&q=Cape Town`

    try {
          const response = await Axios.get(completeLocation)
          return response.data
      } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await initFetchData(import.meta.env.VITE_API_PARTIAL, import.meta.env.VITE_API_KEY)
      if (data.status === 400) {
        setError('Something went wrong, please try again')
      } else {
        setWeather({...weather,
          location: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          condition: data.current.condition.text,
          icon: data.current.condition.icon,
          feels_like: data.current.feelslike_c,
          windspeed: data.current.wind_kph,
          wind_dir: data.current.wind_dir,
          precipitation: data.current.precip_mm,
          humidity: data.current.humidity,
          cloud: data.current.cloud,
          uv_in: data.current.uv
        })
      }
    }

    fetchData()

  }, [])

  return (
    <div className='main'>
      <NavBar />
        <div className='main-container-weather-data'>
          <SearchBar
              location={location}
              setLocation={setLocation}
              setWeather={setWeather}
              setError={setError}
          />
          <Error error={error} setError={setError} />
          <CityInfo
            initFetchData={initFetchData}
            weather={weather}
          />
        </div>
        <div className='footerBin'>
          <Footer />
        </div>
      </div>
  )
}

export default App

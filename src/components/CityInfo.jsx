import React from 'react'
import './Cityinfo.css'
import thermo from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-thermometer-96.png'
import windgauge from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-wind-gauge-96.png'
import precip from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-rain-gauge-96.png'
import humidity from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-hygrometer-96.png'
import pie from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-pie-chart-64.png'
import uvindex from '/Users/adrian/Projects/alphafrontend/frontend/src/assets/icons8-skin-exposure-100.png'

function CityInfo({ weather, setWeather}) {


  const CurrentWeather = ({ weather }) => {
    
    if (!weather.temp) {
      return (
        <div className='loading'>
          <p>...loading</p>
        </div>
      )      
    } else {
    return (
        <>
          <div className='main-weather'>
            <div>
              <img src={weather.icon} alt="Icon showing Sky conditions"/>
            </div>
            <div>
              <p>Location: {weather.location}</p>
              <p>Country: {weather.country}</p>
              <p>Condition: {weather.condition}</p>
              <p>Temperature: {weather.temp} C</p>
            </div>
          </div>
          <div className='grid-container'>
            <div className='grid-1'>
              <img src={thermo} alt="" />
              <p>Feels like: {weather.feels_like} C</p>
            </div>
            <div className='grid-2'>
              <img src={windgauge} alt="" />
                <p>Wind speed: {weather.windspeed} kp/h</p>
            </div>
            <div className='grid-3'>
              <img src={humidity} alt="" />
              <p>Humidity: {weather.humidity} %</p>
            </div>
            <div className='grid-4'>
              <img src={precip} alt="" />
              <p>Rain: {weather.precipitation} mm</p>
            </div>
            <div className='grid-5'>
              <img src={pie} alt="" />
              <p>Cloud cover: {weather.cloud}%</p>
            </div>
            <div className='grid-6'>
              <img src={uvindex} alt="" />
              <p>UV Index: {weather.uv_in}</p>
            </div>
          </div>
        </>
      ) 
    }
  }

  return (
    <>
      <div className='weather-data-cont'>
          <CurrentWeather weather={weather}/>
      </div>
    </>
  )
}

export default CityInfo
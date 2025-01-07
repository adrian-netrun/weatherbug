import Axios from "axios";
import './SearchBar.css'

function SearchBar({ location, setLocation, setWeather, setError, weather}) {

  const handleInput = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
  }

  const handleSearch = async (e) => {

    e.preventDefault()

    console.log(location)

    const completeURL = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=
                                ${location}`

    try {
        const result = await Axios.get(completeURL)
        const data = result.data
        if (data.status === 400) {
          setError('Please try again, something went wrong')
          setLocation('')
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
          setLocation('')
        }
      }
    catch (error) {
        setError('Please try again, something went wrong')
        setLocation('')
        console.log(error)
      }
    }

  return (
    <form className='searchbin'>
      <label htmlFor="search">Search: </label>
      <input type="text" 
          name="search" 
          value={location}
          onChange={e => handleInput(e)}
      />
      <button type="submit" onClick={handleSearch}>Search</button>
    </form>
  )
}

export default SearchBar
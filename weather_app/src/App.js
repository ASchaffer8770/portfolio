import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0b275a2a8fb694ac3d8f2467915f36a9`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
        <a href="http://localhost:3001/">
          <button className='button'>Portfolio</button>
        </a>
      <div className='search'>
        <input value={location} onChange={event => setLocation(event.target.value)} type='text'
          onKeyDown={searchLocation}
          placeholder='Enter City'>
        </input>
      </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            


            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name != undefined &&
                      <div className="bottom">
                      <div className="feels">
                        <p className='bold'>{data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}</p>
                        <p>Feels Like</p>
                      </div>
                      <div className="humidity">
                        <p className='bold'>{data.main ? <p>{data.main.humidity}%</p> : null}</p>
                        <p>Humidity</p>
                      </div>
                      <div className="wind">
                        {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
                        <p>Winds</p>
                      </div>
                    </div>
          }
        </div>
    </div>
  );
}

export default App;

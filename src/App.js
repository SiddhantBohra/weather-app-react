import React, { Component } from 'react';
import './App.css';
import Titles from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'
const API_KEY = "25526a3531a5bfabc7661ab9dab34927"

class App extends Component {
  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    const city = e.target.elements.City.value
    const country = e.target.elements.Country.value
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      temprature: data.main.temp,
      city : data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temprature={this.state.temprature}
          city = {this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}
export default App
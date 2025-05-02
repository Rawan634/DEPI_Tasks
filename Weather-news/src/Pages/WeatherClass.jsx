// couldn't find free weather api, i tried some websites but couldn't sign up and get the api key
// so i tried free fake api but the site closed so it will give an error when pressing the get weather button
// saying that it failed to fetch at fetchweather

import React, { Component } from "react";

class WeatherClass extends Component {
  state = { city: "", weatherData: null };

  handleInputChange = (e) => this.setState({ city: e.target.value });

  fetchWeather = () => {
    fetch("https://www.freetestapi.com/api/v1/weathers")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          weatherData: data.find(
            (item) => item.city.toLowerCase() === this.state.city.toLowerCase()
          ) || null,
        })
      );
  };

  render() {
    const { city, weatherData } = this.state;
    return (
      <div className="container">
        <h1 className="text-center my-4">Weather Search</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={this.handleInputChange}
          />
          <button className="btn btn-primary mt-2" onClick={this.fetchWeather}>
            Get Weather
          </button>
        </div>
        {weatherData ? (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>City</th>
                <th>Country</th>
                <th>Temperature (°C)</th>
                <th>Weather Condition</th>
                <th>Humidity (%)</th>
                <th>Wind Speed (km/h)</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{weatherData.city}</td>
                <td>{weatherData.country}</td>
                <td>{weatherData.temperature}</td>
                <td>{weatherData.weather_description}</td>
                <td>{weatherData.humidity}</td>
                <td>{weatherData.wind_speed}</td>
                <td>{weatherData.latitude}</td>
                <td>{weatherData.longitude}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-center">City not found or enter a valid city name.</p>
        )}
      </div>
    );
  }
}

export default WeatherClass;

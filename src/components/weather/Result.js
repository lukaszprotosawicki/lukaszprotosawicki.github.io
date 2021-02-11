import React from "react";

const Result = (props) => {
  const {
    err,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    date,
  } = props.weather;

  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const temperature = (temp - 271).toFixed(1);
    content = (
      <div className="content-weather">
        <br />
        <h3>
          {" "}
          Search result for <em>{city}</em>
        </h3>
        <br />
        <h4>Data for the day and time: {date}</h4>
        <h4>Current temperature: {temperature} &#176;C</h4>
        <h4>Sunrise: {sunriseTime}</h4>
        <h4>Sunset: {sunsetTime}</h4>
        <h4>Pressure: {pressure} hPa</h4>
        <h4>Wind: {wind} m/s</h4>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="result">
        {err ? `Not in the database ${city}` : content}
      </div>
    </React.Fragment>
  );
};

export default Result;

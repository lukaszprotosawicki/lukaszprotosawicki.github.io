import React from "react";

const Result = (props) => {
  const { err, city, sunrise, sunset, temp, pressure, wind } = props.weather;
  return (
    <React.Fragment>
      <div>Weather for: {city}</div>
      <div>Temperature: {temp}</div>
    </React.Fragment>
  );
};

export default Result;

// not in the database

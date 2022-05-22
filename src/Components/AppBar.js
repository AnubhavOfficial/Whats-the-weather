import React from "react";

const place = "Rupnagar";
const airQualityData = "yes";
const ApiLink = `http://api.weatherapi.com/v1/current.json?key=70d0f860d8d74f5e8ff115741222205&q=${place}&aqi=${airQualityData}`;

const AppBar = () => {
  return <div>AppBar</div>;
};

export default AppBar;

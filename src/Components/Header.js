import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const place = "Rupnagar";
const airQualityData = "yes";
const ApiLink = `http://api.weatherapi.com/v1/current.json?key=70d0f860d8d74f5e8ff115741222205&q=${place}&aqi=${airQualityData}`;

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Whats the Weather?</Typography>
          <Button>Home</Button>
          <Button>About</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

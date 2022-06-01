import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Info, Home, NightsStay } from "@material-ui/icons";
import WeatherLogo from "../Assets/Images/WeatherLogo.gif";
const place = "Rupnagar";
const airQualityData = "yes";
const ApiLink = `http://api.weatherapi.com/v1/current.json?key=70d0f860d8d74f5e8ff115741222205&q=${place}&aqi=${airQualityData}`;

const useStyles = makeStyles({
  appbar: {
    background: "#33495F",
    height: "4rem",
  },
  weather: {
    display: "flex",
    textDecoration: "none",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  btn: {
    color: "white",
    marginRight: "1.5rem",
  },
  gif: {
    height: "3rem",
    width: "3rem",
    marginRight: "0.5rem",
    // borderRadius: "50%",
    // background: "yellow",
    // color: "yellow",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <a href="http://localhost:3000/" className={classes.weather}>
              {/* <NightsStay /> */}
              <img src={WeatherLogo} alt="" className={classes.gif} />
              <Typography variant="h6">Whats the Weather?</Typography>
            </a>
          </div>
          <div>
            <Button className={classes.btn}>
              <Home />
              Home
            </Button>
            <Button className={classes.btn}>
              <Info />
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

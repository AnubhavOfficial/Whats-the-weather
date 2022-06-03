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
    fontFamily: "Arizonia,cursive",
    cursor: "pointer",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  btn: {
    color: "white",
    marginRight: "1.5rem",
    fontSize: "1rem",
    fontFamily: "Arizonia,cursive",
    textDecoration: "none",
  },
  gif: {
    height: "2.5rem",
    width: "2.5rem",
    marginRiht: "0.5rem",
  },
  btnIcon: {
    marginRight: "0.3rem",
  },
  text: {
    fontFamily: "Arizonia,cursive",
    fontSize: "1.3rem",
  },
});

const Header = () => {
  const classes = useStyles();

  const reload = () => {
    window.location.reload();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div onClick={reload} className={classes.weather}>
            <img src={WeatherLogo} alt="" className={classes.gif} />
            <Typography className={classes.text}>Whats the Weather?</Typography>
          </div>
          <div>
            <Button className={classes.btn} onClick={scroll}>
              <Home className={classes.btnIcon} />
              Home
            </Button>
            <a href="#about" alt="">
              <Button className={classes.btn}>
                <Info className={classes.btnIcon} />
                About
              </Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

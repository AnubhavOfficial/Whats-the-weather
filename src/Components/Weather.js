import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import WeatherImg1 from "../Assets/Images/Weather1.jpg";
import WeatherImg2 from "../Assets/Images/Weather2.jpg";
import WeatherImg3 from "../Assets/Images/Weather3.jpg";
import WeatherImg4 from "../Assets/Images/Weather4.jpg";
import WeatherImg5 from "../Assets/Images/Weather5.jpg";
import WeatherImg6 from "../Assets/Images/Weather6.jpg";
import WeatherImg7 from "../Assets/Images/Weather7.jpg";
import WeatherImg8 from "../Assets/Images/Weather8.jpg";
import WeatherImg9 from "../Assets/Images/Weather9.jpg";
import WeatherImg10 from "../Assets/Images/Weather10.jpg";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { showAction } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "./../Actions/index";

const useStyles = makeStyles({
  main: {
    background: "grey",
    height: "calc(100vh - 4rem)",
    minHeight: "calc(100vh - 4rem)",
    marginTop: "4rem",
    width: "100vw",
    // backgroundImage: `url(${interval})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw calc(100vh - 4rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "100vw",
    height: "100vh",
  },
  search: {
    width: "40rem",
    background: "black",
    height: "4rem",
    fontSize: "1.5rem",
    padding: "0 0.5rem",
    borderRadius: "5rem",
    color: "white",
    textAlign: "center",
    opacity: 0.7,
    "&::placeholder": {
      color: "white",
      fontSize: "1.3rem",
    },
  },
  video: {
    height: "100vh",
    width: "100vw",
  },
  searchDiv: {
    display: "flex",
    marginTop: "1rem",
  },
  searchBtn: {
    width: "10rem",
    height: "4rem",
    borderRadius: "4rem",
    fontSize: "1.2rem",
    background: "black",
    opacity: "0.7",
    color: "white",
    marginLeft: "1rem",
    padding: "0 1.5rem",
    justifyContent: "space-between",
    "&:hover": {
      background: "black",
      opacity: "0.57",
      transform: "scale(1.1)",
    },
  },
  searchText: {
    color: "lightgrey",
    fontFamily: "Arizonia,cursive",
    fontSize: "3.5rem",
  },
});

const Weather = () => {
  const classes = useStyles();
  // const [show, setShow] = useState(false);
  const [image, setImage] = useState(WeatherImg1);
  const [num, setNum] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      const images = [
        WeatherImg1,
        WeatherImg2,
        WeatherImg3,
        WeatherImg4,
        WeatherImg5,
        WeatherImg6,
        WeatherImg7,
        WeatherImg8,
        WeatherImg9,
        WeatherImg10,
      ];
      if (num === 9) {
        setNum(0);
      } else {
        setNum(num + 1);
      }

      setImage(images[num]);
    }, 2500);
    return () => clearInterval(interval);
  }, [num]);

  const scrollSearch = () => {
    const element = document.getElementById("weatherInfo");
    element.scrollIntoView(false);
  };
  const nothing = () => {};
  const Search = async () => {
    show ? scrollSearch() : nothing();
    // const res = await axios.post(
    // `http://api.weatherapi.com/v1/forecast.json?key=70d0f860d8d74f5e8ff115741222205&q=${searchValue}&days=3&aqi=yes&alerts=no`
    // );
    // const res = dataJson;
    // setData(dataJson);
    // setData(res.data);
    dispatch(getDataAction(searchValue));
    dispatch(showAction(true));
    // setShow(true);
  };

  const searchChange = () => {
    const value = document.getElementById("searchbar").value;
    setSearchValue(value);
  };
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.main}
      >
        <Typography className={classes.searchText}>
          Please enter your <b style={{ color: "yellow" }}>Location</b>{" "}
          here.....
        </Typography>
        <div className={classes.searchDiv}>
          <input
            id="searchbar"
            type="text"
            placeholder="Example: city name, zipcode or latitude/longitude (decimal degree)"
            className={classes.search}
            onChange={searchChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                Search();
              }
            }}
          />
          <Button className={classes.searchBtn} onClick={Search}>
            Search <SearchIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Weather;

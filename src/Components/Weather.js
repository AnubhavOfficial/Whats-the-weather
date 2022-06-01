import { makeStyles } from "@material-ui/core";
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
import WeatherImg from "../Assets/Images/Weather.gif";
import sample from "../Assets/videos/weatherVideo.mp4";
const useStyles = makeStyles({
  main: {
    background: "black",
    height: "calc(100vh - 4rem)",
    marginTop: "4rem",
    width: "100vw",
    // backgroundImage: `url(${interval})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw calc(100vh - 4rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100vw",
    height: "100vh",
  },
  search: {
    width: "25rem",
    background: "black",
    height: "2rem",
    fontSize: "1.5rem",
    padding: "0.5rem",
    borderRadius: "5rem",
    color: "white",
    opacity: 0.7,
    "&::placeholder": {
      color: "white",
    },
  },
  video: {
    height: "100vh",
    width: "100vw",
  },
});

const Weather = () => {
  const classes = useStyles();

  const [image, setImage] = useState(WeatherImg1);
  const [num, setNum] = useState(0);
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
        console.log("In IF");
        setNum(0);
      } else {
        setNum(num + 1);
      }
      console.log(num);
      setImage(images[num]);
    }, 2500);
    return () => clearInterval(interval);
  }, [num]);
  return (
    <>
      {/* <video className={classes.video} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={classes.main}
      >
        <input
          type="text"
          placeholder="Enter your location"
          className={classes.search}
        />
      </div>
    </>
  );
};

export default Weather;

import React, { useEffect } from "react";
import TempGraph from "./TempGraph";
import AstroDetails from "./AstroDetails";
import DayDetails from "./DayDetails";
import AirQuality from "./AirQuality";
import CurrentTempDetails from "./CurrentTempDetails";
import DayCards from "./DayCards";
import LocationDetails from "./LocationDetails";
import { makeStyles } from "@material-ui/core";
import WeatherImg from "../Assets/Images/Background3.jpg";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    backgroundImage: `url(${WeatherImg})`,
    // background: "yellow",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw calc(100vh - 4rem)",
    height: "calc(100vh - 4rem)",
    minHeight: "calc(100vh - 4rem)",
    // marginTop: "4rem",
    // scrollSnapType: "y mandatory",
    // scrollSnapAlign: "start",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "28%",
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    height: "52%",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
});
function WeatherInfo() {
  const show = useSelector((state) => state.show);
  useEffect(() => {
    if (show) {
      scroll();
    } else {
    }
  }, [show]);
  const scroll = () => {
    const element = document.getElementById("weatherInfo");
    element.scrollIntoView(false);
  };
  const classes = useStyles();
  return (
    <>
      {show ? (
        <div className={classes.main} id="weatherInfo">
          <div className={classes.header}>
            <LocationDetails />
            <DayDetails />
            <AstroDetails />
          </div>
          <div className={classes.body}>
            <CurrentTempDetails />
            <TempGraph />
            <AirQuality />
          </div>
          <div className={classes.footer}>
            <DayCards />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default WeatherInfo;

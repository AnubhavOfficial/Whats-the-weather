import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  main: {
    background: "red",
    height: "calc(100vh - 4rem)",
  },
});
function WeatherInfo() {
  const classes = useStyles();

  return <div className={classes.main}>WeatherInfo</div>;
}

export default WeatherInfo;

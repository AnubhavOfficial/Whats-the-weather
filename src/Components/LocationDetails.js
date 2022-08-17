import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  main: {
    width: "40%",
    display: "flex",
    // justifyContent: "space-around",
    marginTop: "1rem",
    marginLeft: "1rem",
    color: "#F6FF6E",
    // background: "yellow",
  },
  div2: {
    justifyContent: "start",
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",

    // background: "red",
  },
  div1: {
    // background: "black",
    width: "58%",
  },
});
function LocationDetails() {
  const classes = useStyles();
  const location = useSelector((state) => state.location);
  const timeArr = location.localtime.split(" ");
  const time = timeArr[1];
  const date = timeArr[0];
  const timeConvert = (value) => {
    // let retValue;
    var H = +value.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 ? " AM" : " PM";
    value = h + value.substr(2, 3) + ampm;
    return value;
  };
  const reverseDate = (value) => {
    const arr = value.split("-");
    return arr[2] + "-" + arr[1] + "-" + arr[0];
  };
  return (
    <div className={classes.main}>
      <div className={classes.div1}>
        <Typography variant="h3">{location.name}</Typography>
        <Typography variant="h5">
          {location.region}, {location.country}
        </Typography>
        <Typography>
          {location.lat}
          {" °N "} &nbsp;{location.lon}
          {" °E "}
        </Typography>
      </div>
      <div className={classes.div2}>
        <Typography variant="h6">Time: {timeConvert(time)}</Typography>
        <Typography variant="h6">Date: {reverseDate(date)}</Typography>
      </div>
    </div>
  );
}

export default LocationDetails;

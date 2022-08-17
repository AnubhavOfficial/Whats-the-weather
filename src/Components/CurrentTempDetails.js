import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    // height: "rem",
    // background: "white",
    width: "20%",
    color: "#F6FF6E",
    marginLeft: "1rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "20%",
  },
  icon: {
    height: "2.5rem",
    width: "2.5rem",
    marginLeft: "0.5rem",
  },
  text1: {
    fontSize: "2rem",
  },
  lowerHalf: {
    height: "80%",
    // background: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  updateText: {
    // float: "right",
    fontSize: "0.8rem",
    marginTop: "2rem",
  },
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },
  text: {
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    "&:hover": {
      color: "#F6FF6E",
      transform: "scale(1.1)",
    },
  },
});
function CurrentTempDetails() {
  const classes = useStyles();

  const tempIn = useSelector((state) => state.tempIn);
  const current = useSelector((state) => state.current);

  const direction = (dir) => {
    switch (dir) {
      case "W":
        return "West";
      case "E":
        return "East";
      case "S":
        return "South";
      case "N":
        return "North";
      default:
        return "North";
    }
  };
  const lastUpdate = (last) => {
    let time = last.split(" ")[1];
    time = timeConvert(time);

    return time;
  };
  const timeConvert = (value) => {
    // let retValue;
    var H = +value.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 ? " AM" : " PM";
    value = h + value.substr(2, 3) + ampm;
    return value;
  };
  const [open, setOpen] = useState(false);
  const handleClick = (val) => {
    setOpen(val);
  };
  return (
    <>
      {open ? (
        <div className={classes.main} onClick={() => handleClick(false)}>
          <div className={classes.header}>
            <Typography className={classes.text1}>
              {current.condition.text}
            </Typography>
            <img
              src={current.condition.icon}
              alt={current.condition.text}
              className={classes.icon}
            />
          </div>
          <div className={classes.lowerHalf}>
            <Typography>
              Temp: {tempIn ? current.temp_c + " °C" : current.temp_f + " °F"}
            </Typography>
            <Typography> Precipitation: {current.precip_mm} mm</Typography>
            <Typography> Humidity: {current.humidity} %</Typography>
            <Typography> Wind Dir: {direction(current.wind_dir)}</Typography>
            <Typography> Wind Degree: {current.wind_degree} °</Typography>
            <Typography> Wind Speed: {current.wind_kph} km/h</Typography>
          </div>
          <Typography className={classes.updateText}>
            ( Last Updated: {lastUpdate(current.last_updated)} )
          </Typography>
        </div>
      ) : (
        <div className={`${classes.main} ${classes.main2}`}>
          <Typography
            variant="h4"
            className={classes.text}
            onClick={() => handleClick(true)}
          >
            Current Weather
          </Typography>
        </div>
      )}
    </>
  );
}

export default CurrentTempDetails;

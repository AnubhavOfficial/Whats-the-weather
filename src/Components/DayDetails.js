import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    width: "30%",
    color: "#F6FF6E",
  },
  InnerMain: {
    display: "flex",
    height: "80%",
  },
  icon: {
    height: "2.5rem",
    width: "2.5rem",
    marginLeft: "0.5rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "20%",
  },
  text1: {
    fontSize: "1.7rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    width: "57%",
    justifyContent: "space-around",
  },
  right: {
    width: "43%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
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
function DayDetails() {
  const classes = useStyles();
  const tempIn = useSelector((state) => state.tempIn);
  const day = useSelector((state) => state.selected.day);
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
              {day.condition.text}
            </Typography>
            <img
              src={day.condition.icon}
              alt={day.condition.text}
              className={classes.icon}
            />
          </div>
          <div className={classes.InnerMain}>
            <div className={classes.left}>
              <Typography>
                Avg Temp:{" "}
                {tempIn ? day.avgtemp_c + " °C" : day.avgtemp_f + " °F"}
              </Typography>
              <Typography>Avg Humidity: {day.avghumidity} %</Typography>
              <Typography>
                Total Precipitation: {day.totalprecip_mm} mm
              </Typography>
              <Typography>Max Wind: {day.maxwind_kph} km/h</Typography>
            </div>
            <div className={classes.right}>
              <Typography>
                Max Temp:{" "}
                {tempIn ? day.maxtemp_c + " °C" : day.maxtemp_f + " °F"}
              </Typography>
              <Typography>
                Min Temp:{" "}
                {tempIn ? day.mintemp_c + " °C" : day.mintemp_f + " °F"}
              </Typography>
              <Typography>
                Rain: {day.daily_will_it_rain === 1 ? "Yes" : "No"}
              </Typography>
              <Typography>
                Snow: {day.daily_will_it_snow === 1 ? "Yes" : "No"}
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${classes.main} ${classes.main2}`}>
          <Typography
            variant="h4"
            className={classes.text}
            onClick={() => handleClick(true)}
          >
            Day Details
          </Typography>
        </div>
      )}
    </>
  );
}

export default DayDetails;

import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    // height: "rem",
    // background: "white",
    width: "20%",
    color: "#F6FF6E",
  },
  InnerMain: {
    display: "flex",
    justifyContent: "center",
    height: "80%",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    fontWeight: "bolder",
    color: "white",
  },
  name: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    flexDirection: "column",
    // background: "red",
    width: "25%",
  },
  value: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
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

function AirQuality() {
  const classes = useStyles();
  const airQualityData = useSelector((state) => state.current.air_quality);
  const fixed = (val) => {
    return val.toFixed(2);
    // let a = Math.round(val * 1000.0);
    // return (a / 1000).toFixed(2);
    // return Math.round(val * 1000) / 1000;
    // return val.toFixed(4);
  };
  const [open, setOpen] = useState(false);
  const handleClick = (val) => {
    setOpen(val);
  };
  return (
    <>
      {open ? (
        <div className={classes.main} onClick={() => handleClick(false)}>
          <Typography className={classes.heading}>Air Quality</Typography>
          <div className={classes.InnerMain}>
            <div className={classes.name}>
              <Typography>CO </Typography>
              <Typography>NO{<sub>2</sub>} </Typography>
              <Typography>O{<sub>3</sub>} </Typography>
              <Typography>SO{<sub>2</sub>} </Typography>
              <Typography>PM{<sub>2.5</sub>} </Typography>
              <Typography>PM{<sub>10</sub>} </Typography>
            </div>
            <div className={classes.value}>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fixed(airQualityData.co)}
              </Typography>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fixed(airQualityData.no2)}
              </Typography>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fixed(airQualityData.o3)}
              </Typography>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fixed(airQualityData.so2)}
              </Typography>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {fixed(airQualityData.pm2_5)}
              </Typography>
              <Typography>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {fixed(airQualityData.pm10)}
              </Typography>
            </div>
          </div>
          {/* <Typography>us-epa-index: {airQualityData.us-epa-index}</Typography> */}
          {/* <Typography>gb-defra-index: {airQualityData.gb-defra-index}</Typography> */}
        </div>
      ) : (
        <div className={`${classes.main} ${classes.main2}`}>
          <Typography
            variant="h4"
            className={classes.text}
            onClick={() => handleClick(true)}
          >
            Air Quality
          </Typography>
        </div>
      )}
    </>
  );
}

export default AirQuality;

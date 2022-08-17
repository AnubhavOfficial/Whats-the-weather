import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    // height: "10rem",
    width: "30%",
    display: "flex",
    fontFamily: "Arizonia,cursive",
    padding: "1rem",
    color: "#F6FF6E",
    // flexDirection: "column",
  },
  sun: {
    fontFamily: "Arizonia,cursive",
    width: "45%",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.3rem",
    // justifyContent: "space-between",
    margin: "0.5rem 0",
    // alignItems: "center",
  },
  moon: {
    fontFamily: "Arizonia,cursive",
    width: "55%",
    display: "flex",
    fontSize: "1.3rem",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  main2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    // paddingRight: "1.5rem",
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
function AstroDetails() {
  const astro = useSelector((state) => state.selected.astro);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = (val) => {
    setOpen(val);
  };
  return (
    <>
      {open ? (
        <div className={classes.main} onClick={() => handleClick(false)}>
          <div className={classes.sun}>
            <Typography>Sun Rise: {astro.sunrise}</Typography>
            <Typography style={{ marginTop: "0.8rem" }}>
              {" "}
              Sun Set: {astro.sunset}
            </Typography>
          </div>
          <div className={classes.moon}>
            <Typography>Moon Rise: {astro.moonrise}</Typography>
            <Typography>Moon Set: {astro.moonset}</Typography>
            <Typography>Moon Phase: {astro.moon_phase}</Typography>
            <Typography>
              Moon Illumination :{astro.moon_illumination}
            </Typography>
          </div>
        </div>
      ) : (
        <div className={`${classes.main} ${classes.main2}`}>
          <Typography
            variant="h4"
            className={classes.text}
            onClick={() => handleClick(true)}
          >
            Astro Details
          </Typography>
        </div>
      )}
    </>
  );
}

export default AstroDetails;

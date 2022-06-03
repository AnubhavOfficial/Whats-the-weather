import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  about: {
    background: "gold",
    height: "10rem",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about} id="about">
      About
    </div>
  );
};

export default About;

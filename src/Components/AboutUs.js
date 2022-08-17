import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Facebook } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { LocationOn } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { Mail } from "@material-ui/icons";

const useStyles = makeStyles({
  main: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  contactInfo: {
    width: "32%",
    background: "#3E1F92",
    height: "100%",
    padding: "0 3%",
  },
  heading: {
    fontSize: "2.5rem",
    paddingTop: "10%",
    color: "white",
    fontWeight: "bold",
  },
  subHeading: {
    color: "#9B86D1",
    marginTop: "5%",
    fontSize: "1.2rem",
  },
  icon: {
    color: "#F696A3",
    marginRight: "10%",
  },
  iconTypo: {
    display: "flex",
    alignItems: "center",
    marginTop: "15%",
    color: "#D2CAE6",
    fontSize: "1.1rem",
  },
  socialMedia: {
    marginTop: "20%",
  },
  //   circle: {
  //     width: "280px",
  //     height: "280px",
  //     background: "#FA949D",
  //     position: "relative",
  //     top: "30.5%",
  //     left: "12.5%",
  //     borderTopLeftRadius: "100%",
  //     borderTopRightRadius: 0,
  //     borderBottomLeftRadius: 0,
  //     borderBottomRightRadius: 0,
  //     zIndex: "1",
  //   },
  icons: {
    marginRight: "15%",
    height: "1.8rem",
    width: "1.8rem",
    padding: "0.5rem",
    borderRadius: "100%",
    color: "#D2CAE6",
    cursor: "pointer",
    "&:hover": {
      background: "#FA949D",
    },
  },
  details: {
    width: "56%",
    height: "100%",
    padding: "0 3%",
    display: "flex",
    flexDirection: "column",
  },
  div1: {
    height: "25%",
    width: "100%",
    display: "flex",
  },
  input: {
    width: "18rem",
    height: "3rem",
    border: "none",
    outline: "none",
    fontSize: "1.5rem",
    borderBottom: "0.2rem solid #D2CAE6",
    color: "#3E1F92",
    fontWeight: "bold",
    cursor: "text",
    "&::placeholder": {
      color: "#6e4fc4",
    },
  },
  subDiv: {
    margin: "2rem 3rem",
  },
  nameHeading: {
    fontSize: "1rem",
    color: "#3E1F92",
    fontWeight: "bold",
  },
  textarea: {
    width: "42rem",
    height: "7rem",
    resize: "none",
    fontSize: "1.2rem",
    border: "none",
    borderBottom: "0.2rem solid #D2CAE6",
    outline: "none",
    color: "#3E1F92",
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: "1rem",
    cursor: "text",
    "&::placeholder": {
      color: "#6e4fc4",
    },
  },
  message: {
    height: "30%",
    width: "100%",
    display: "flex",
  },
  send: {
    height: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "end",
  },
  btn: {
    marginTop: "1rem",
    background: "#3E1F92",
    height: "40%",
    width: "25%",
    color: "white",
    borderRadius: "0.5rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      background: "#3E1F92",
    },
  },
});
const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.contactInfo}>
        <Typography className={classes.heading}>
          Contact Information{" "}
        </Typography>
        <Typography className={classes.subHeading}>
          Fill up the form and our Team will get back to you within 24 hours{" "}
        </Typography>

        <Typography className={classes.iconTypo}>
          <Phone className={classes.icon} />
          +91 9876543210
        </Typography>
        <Typography className={classes.iconTypo}>
          <Mail className={classes.icon} />
          testing@lens.com
        </Typography>
        <Typography className={classes.iconTypo}>
          <LocationOn className={classes.icon} />
          102 Street 2714 Don
        </Typography>

        <div className={classes.socialMedia}>
          <Facebook className={classes.icons} />
          <Twitter className={classes.icons} />
          <Instagram className={classes.icons} />
          <LinkedIn className={classes.icons} />
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.div1}>
          <div className={classes.subDiv}>
            <Typography className={classes.nameHeading}>First Name</Typography>
            <input type="text" placeholder="John" className={classes.input} />
          </div>
          <div className={classes.subDiv}>
            <Typography className={classes.nameHeading}>Last Name</Typography>
            <input type="text" placeholder="Doe" className={classes.input} />
          </div>
        </div>
        <div className={classes.div1}>
          <div className={classes.subDiv}>
            <Typography className={classes.nameHeading}>Mail</Typography>
            <input
              type="text"
              placeholder="john.doe@gmail.com"
              className={classes.input}
            />
          </div>
          <div className={classes.subDiv}>
            <Typography className={classes.nameHeading}>Phone</Typography>
            <input
              type="text"
              placeholder="+91 9876543210"
              className={classes.input}
            />
          </div>
        </div>
        <div className={classes.message}>
          <div className={classes.subDiv}>
            <Typography className={classes.nameHeading}>Message</Typography>
            <textarea
              className={classes.textarea}
              placeholder="I wanted to know about ..."
            ></textarea>
          </div>
        </div>
        <div className={classes.send}>
          <Button className={classes.btn}>Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

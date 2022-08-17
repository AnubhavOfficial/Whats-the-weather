import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectedDateAction } from "../Actions";

const useStyles = makeStyles({
  main: {
    // height: "rem",
    // background: "green",
    width: "35%",
    display: "flex",
    justifyContent: "space-around",
    // marginTop: "1rem",
  },
  card: {
    height: "6rem",
    width: "6rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    // marginLeft: "2rem",
    border: "0.1rem solid #2B2B2B",
    borderRadius: "1rem",
    cursor: "pointer",
    background: "#585858",
    color: "#F6FF6E",
    textTransform: "none",
    // background: "#2B2B2B",
    // color: "white",
    opacity: "0.8",
    fontWeight: "bold",
    fontSize: "1.3rem",
    "&:hover": {
      // opacity: "0.9",
      // background: "black",
      background: "black",
      color: "#F6FF6E",
      cursor: "pointer",
      // transform: "scale(1.1)",
    },
    // "&:focus": {
    //   background: "white",
    //   textTransform: "",
    // },
  },
});
function DayCards() {
  const classes = useStyles();
  const day1 = useSelector((state) => state.day1);
  const day2 = useSelector((state) => state.day2);
  const day3 = useSelector((state) => state.day3);
  const selected = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const cardClicked = (param) => {
    dispatch(selectedDateAction(param));
  };
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function convertDate(date_str) {
    let temp_date = date_str.split("-");
    var number = temp_date[2].replace(/^0+/, "");
    return number + " " + months[Number(temp_date[1]) - 1];
  }
  return (
    <div className={classes.main}>
      <Button
        className={classes.card}
        onClick={() => cardClicked(day1)}
        style={
          selected.date === day1.date
            ? { color: "#303030", background: "#F6FF6E" }
            : { color: "#F6FF6E", background: "#303030" }
        }
      >
        {convertDate(day1.date)}
      </Button>
      <Button
        className={classes.card}
        onClick={() => cardClicked(day2)}
        style={
          selected.date === day2.date
            ? { color: "#303030", background: "#F6FF6E" }
            : { color: "#F6FF6E", background: "#303030" }
        }
      >
        {convertDate(day2.date)}
      </Button>
      <Button
        className={classes.card}
        onClick={() => cardClicked(day3)}
        style={
          selected.date === day3.date
            ? { color: "#303030", background: "#F6FF6E" }
            : { color: "#F6FF6E", background: "#303030" }
        }
      >
        {convertDate(day3.date)}
      </Button>
    </div>
  );
}

export default DayCards;

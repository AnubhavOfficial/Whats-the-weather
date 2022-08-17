import { makeStyles, Card, Grid, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import WeatherImg from "../Assets/Images/Weather5.jpg";
import { useSelector } from "react-redux";
import { selectedDateAction, tempInAction } from "../Actions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  main: {
    // background: "red",
    backgroundImage: `url(${WeatherImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw calc(100vh - 4rem)",
    height: "calc(100vh - 4rem)",
  },
  card: {
    height: "7rem",
    width: "7rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: "2rem",
    border: "0.1rem solid #2B2B2B",
    borderRadius: "1rem",
    cursor: "pointer",
    background: "#2B2B2B",
    color: "white",
    opacity: "0.8",
    "&:hover": {
      opacity: "0.9",
      // background: "black",
      background: "#2B2B2B",
      transform: "scale(1.1)",
    },
  },
  cardParent: {
    display: "flex",
    marginTop: "2rem",
    // flexDirection: "column",
  },
  cel: {
    display: "flex",
    color: "white",
  },
  celBtn: {
    color: "white",
    fontSize: "1.5rem",
  },
});
function WeatherInfoOld(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const show = props.show;
  const data = props.data;
  const [day1TempC, setDay1TempC] = useState({});
  const [day2TempC, setDay2TempC] = useState([]);
  const [day3TempC, setDay3TempC] = useState([]);
  const show = useSelector((state) => state.show);
  const tempInValue = useSelector((state) => state.tempIn);
  useEffect(() => {
    if (show) {
      scroll();
    }
    if (data.forecast) {
      let i = 0;
      const day1 = data.forecast.forecastday[0];
      const day2 = data.forecast.forecastday[1];
      const day3 = data.forecast.forecastday[2];
      let k = 0;
      let arr = [];
      let brr = [];
      for (i = 0; i < 24; i += 3) {
        brr[k] = day1.hour[i].temp_f;
        arr[k++] = day1.hour[i].temp_c;
      }
      setTemp_c(arr);
      let temp = {
        temp_c: arr,
        temp_f: brr,
      };
      setDay1TempC(temp);
      arr = [];
      k = 0;
      for (i = 0; i < 24; i += 3) {
        arr[k++] = day2.hour[i].temp_c;
      }
      setDay2TempC(arr);
      arr = [];
      k = 0;
      for (i = 0; i < 24; i += 3) {
        arr[k++] = day3.hour[i].temp_c;
      }
      setDay3TempC(arr);

      // arr = [];
      // i = 0;
      // day2.hour.map((hour) => (arr[i++] = hour.temp_c));
      // setDay2TempC(arr);
      // i = 0;
      // arr = [];
      // day3.hour.map((hour) => (arr[i++] = hour.temp_c));
      // setDay3TempC(arr);
    }
  }, [data, show]);
  console.log(day1TempC);
  const [temp_c, setTemp_c] = useState([]);
  // setTemp_c(day1TempC);
  // console.log([day1TempC, day2TempC, day3TempC]);
  // if (data.forecast) {
  //   let arr = [];
  //   let i = 0;
  //   const day1 = data.forecast.forecastday[0];
  //   const day2 = data.forecast.forecastday[1];
  //   const day3 = data.forecast.forecastday[2];
  //   day1.hour.map((hour) => (arr[i++] = hour.temp_c));
  //   setDay1TempC(arr);
  //   arr = [];
  //   i = 0;
  //   day2.hour.map((hour) => (arr[i++] = hour.temp_c));
  //   setDay2TempC(arr);
  //   i = 0;
  //   arr = [];
  //   day3.hour.map((hour) => (arr[i++] = hour.temp_c));
  //   setDay3TempC(arr);
  //   console.log([day1TempC, day2TempC, day3TempC]);
  // }

  const options = {
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          crop: false,
          overflow: "none",
          style: {
            color: "yellow",
            textShadow: false,
            fontSize: "0.6rem",
            fontWeight: "100",
            shadow: "none",
            textOutline: false,
          },
        },
      },
    },
    series: [
      {
        pointWidth: 30,
        dataLabels: {
          enabled: true,
          style: {
            color: "gold",
            textOutline: false,
          },
          crop: false,
          overflow: "none",
        },
        color: "gold",
        borderColor: "yellow",
        type: "area",
        allowPointSelect: true,
        cursor: "pointer",
        fillColor: "rgba(255,255,0,0.2)",
        point: {
          events: {
            click: function () {
              alert(this.y);
            },
          },
        },
        // findNearestPointBy: "x",
        // connectorAllowed: true,
        // fillOpacity: 0.1,
        // label: {
        //   enabled: true,
        //   minFontSize: 20,
        //   connectorAllowed: true,
        // },

        // data: [data.forecast.forecastday[0].day],
        data: temp_c,
      },
    ],
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    chart: {
      backgroundColor: "none",
      height: "40%",
      borderColor: "red",
      spacing: [50, 50, 50, 50],
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      gridLineWidth: 0,
      lineWidth: 0,
      labels: {
        enabled: true,
        style: {
          color: "white",
        },
      },
      title: {
        enabled: false,
      },
    },
    xAxis: {
      categories: [
        "12am",
        "3am",
        "6am",
        "9am",
        "12pm",
        "3pm",
        "6pm",
        "9pm",
        "12pm",
      ],
      labels: {
        rotation: 0,
        style: {
          color: "yellow",
        },
      },
    },
  };
  const scroll = () => {
    const element = document.getElementById("weatherInfo");
    element.scrollIntoView(false);
  };

  const cardClicked = (abc, date) => {
    console.log(abc);
    dispatch(selectedDateAction({ ...date, temp: abc }));
    setTemp_c(abc);
  };
  return (
    <>
      {show ? (
        <div className={classes.main} id="weatherInfo">
          <h1 style={{ color: "white" }}>{data.location.name}</h1>
          <div className={classes.cel}>
            <Button
              className={classes.celBtn}
              onClick={() => dispatch(tempInAction(1))}
            >
              C
            </Button>
            <Button
              className={classes.celBtn}
              onClick={() => dispatch(tempInAction(0))}
            >
              F
            </Button>
            <h1>{tempInValue}</h1>
          </div>
          <div style={{ height: "50vh", width: "60vw" }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className={classes.cardParent}>
            <Button
              className={classes.card}
              onClick={() =>
                cardClicked(day1TempC, data.forecast.forecastday[0])
              }
            >
              <h3>{data.forecast.forecastday[0].date}</h3>
            </Button>
            <Button
              className={classes.card}
              onClick={() =>
                cardClicked(day2TempC, data.forecast.forecastday[1])
              }
            >
              <h3>{data.forecast.forecastday[1].date}</h3>
            </Button>
            <Button
              className={classes.card}
              onClick={() =>
                cardClicked(day3TempC, data.forecast.forecastday[2])
              }
            >
              <h3>{data.forecast.forecastday[2].date}</h3>
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default WeatherInfoOld;

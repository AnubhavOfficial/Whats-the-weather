import { Button, makeStyles } from "@material-ui/core";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { useDispatch, useSelector } from "react-redux";
import { tempInAction } from "../Actions";
const useStyles = makeStyles({
  main: {
    // height: "rem",
    // background: "grey",
    width: "60%",
  },
  btnDiv: {
    display: "flex",
    justifyContent: "end",
    marginRight: "2rem",
  },
  btn: {
    background: "none",
    border: "none",
    height: "2.5rem",
    width: "2.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
function TempGraph() {
  const selected = useSelector((state) => state.selected);
  const tempIn = useSelector((state) => state.tempIn);
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    let i = 0;

    let k = 0;
    let arr = [];
    let brr = [];
    for (i = 0; i < 24; i += 3) {
      brr[k] = selected.hour[i].temp_f;
      arr[k++] = selected.hour[i].temp_c;
    }

    if (tempIn) {
      setTempData(arr);
    } else {
      setTempData(brr);
    }
  }, [selected, tempIn]);

  useEffect(() => {}, [tempIn]);
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
          // format: "{y} °C",
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
        assessibility: {
          enabled: false,
        },
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
        data: tempData,
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
      height: "35%",
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
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.main}>
      <div className={classes.btnDiv}>
        <button
          onClick={() => dispatch(tempInAction(true))}
          className={classes.btn}
          style={
            tempIn
              ? { color: "#F6FF6E", fontSize: "2.5rem" }
              : { color: "darkgrey", fontSize: "1.3rem" }
          }
        >
          °C
        </button>
        <button
          onClick={() => dispatch(tempInAction(false))}
          className={classes.btn}
          style={
            tempIn
              ? { color: "darkgrey", fontSize: "1.3rem" }
              : { color: "#F6FF6E", fontSize: "2.5rem" }
          }
        >
          °F
        </button>
      </div>
      <div style={{ height: "45vh", width: "60vw" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default TempGraph;

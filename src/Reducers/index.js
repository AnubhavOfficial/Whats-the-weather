import { combineReducers } from "redux";
import showReducer from "./show";
import tempInReducer from "./tempIn";
import currentWeatherReducer from "./currentWeather";
import locationReducer from "./location";
import day1Reducer from "./day1";
import day2Reducer from "./day2";
import day3Reducer from "./day3";
import selectedDateReducer from "./selectedDate";

const allReducers = combineReducers({
  show: showReducer,
  tempIn: tempInReducer,
  current: currentWeatherReducer,
  location: locationReducer,
  day1: day1Reducer,
  day2: day2Reducer,
  day3: day3Reducer,
  selected: selectedDateReducer,
});

export default allReducers;

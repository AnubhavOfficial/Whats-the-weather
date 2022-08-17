// import axios from "axios";
import axios from "axios";
import { takeEvery, put, call } from "redux-saga/effects";

function* getDataAsync(action) {
  const DataJson = yield call(APICall, action.value);
  console.log(DataJson);
  yield put({ type: "CURRENT", value: DataJson.current });
  yield put({ type: "LOCATION", value: DataJson.location });
  yield put({ type: "DAY1", value: DataJson.forecast.forecastday[0] });
  yield put({ type: "DAY2", value: DataJson.forecast.forecastday[1] });
  yield put({ type: "DAY3", value: DataJson.forecast.forecastday[2] });
  yield put({ type: "SELECTED", value: DataJson.forecast.forecastday[0] });
}

const obj = {
  current: "",
  location: "",
  forecast: { forecastday: ["", "", ""] },
};

const APICall = async (value) => {
  try {
    const res = await axios.post(
      `http://api.weatherapi.com/v1/forecast.json?key=70d0f860d8d74f5e8ff115741222205&q=${value}&days=3&aqi=yes&alerts=no`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return obj;
  }

  //   console.log(data);
};

export default function* watchGetData(value) {
  yield takeEvery("GET_DATA", getDataAsync);
}

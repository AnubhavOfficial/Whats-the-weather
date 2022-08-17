const startingState = {
  last_updated_epoch: 1654699500,
  last_updated: "2022-06-08 20:15",
  temp_c: 28.5,
  temp_f: 83.3,
  is_day: 0,
  condition: {
    text: "Clear",
    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
    code: 1000,
  },
  wind_mph: 6.3,
  wind_kph: 10.1,
  wind_degree: 352,
  wind_dir: "N",
  pressure_mb: 1000,
  pressure_in: 29.54,
  precip_mm: 0,
  precip_in: 0,
  humidity: 20,
  cloud: 13,
  feelslike_c: 26.4,
  feelslike_f: 79.5,
  vis_km: 10,
  vis_miles: 6,
  uv: 1,
  gust_mph: 11.6,
  gust_kph: 18.7,
  air_quality: {
    co: 447.29998779296875,
    no2: 17.100000381469727,
    o3: 95.80000305175781,
    so2: 3.5,
    pm2_5: 44.29999923706055,
    pm10: 87.30000305175781,
    "us-epa-index": 3,
    "gb-defra-index": 5,
  },
};
const currentWeatherReducer = (state = startingState, action) => {
  switch (action.type) {
    case "CURRENT":
      return action.value;
    default:
      return state;
  }
};

export default currentWeatherReducer;

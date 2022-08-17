const startingState = {
  name: "Rupnagar",
  region: "Punjab",
  country: "India",
  lat: 30.97,
  lon: 76.53,
  tz_id: "Asia/Kolkata",
  localtime_epoch: 1654699758,
  localtime: "2022-06-08 20:19",
};

const locationReducer = (state = startingState, action) => {
  switch (action.type) {
    case "LOCATION":
      return action.value;
    default:
      return state;
  }
};

export default locationReducer;

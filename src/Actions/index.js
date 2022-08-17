export const getDataAction = (data) => {
  return {
    type: "GET_DATA",
    value: data,
  };
};

export const showAction = (value) => {
  return {
    type: "SHOW",
    bool: value,
  };
};

export const tempInAction = (val) => {
  return {
    type: "TEMPIN",
    value: val,
  };
};

export const currentWeatherAction = (val) => {
  return {
    type: "CURRENT",
    value: val,
  };
};

export const locationAction = (val) => {
  return {
    type: "LOCATION",
    value: val,
  };
};

export const day1Action = (val) => {
  return {
    type: "DAY1",
    value: val,
  };
};

export const day2Action = (val) => {
  return {
    type: "DAY2",
    value: val,
  };
};

export const day3Action = (val) => {
  return {
    type: "DAY3",
    value: val,
  };
};
export const selectedDateAction = (val) => {
  return {
    type: "SELECTED",
    value: val,
  };
};

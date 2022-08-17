const tempInReducer = (state = true, action) => {
  switch (action.type) {
    case "TEMPIN":
      return action.value;
    default:
      return state;
  }
};

export default tempInReducer;

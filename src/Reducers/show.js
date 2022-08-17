const showReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW":
      return action.bool;
    default:
      return state;
  }
};

export default showReducer;

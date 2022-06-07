const planets =  (planets = [], action) => {
  switch (action.type) {
    case "FETCH_PLANETS":
      return action.payload;
    default:
      return planets;
  }
};

export default planets;
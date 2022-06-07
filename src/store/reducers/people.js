const people = (people = [], action) => {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return action.payload;
    default:
      return people;
  }
};

export default people;
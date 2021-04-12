import { NewestLaunchDate, OldestLaunchDate } from "../utils/flightUtils";

const flightFilterSelector = (state) => {
  const allFlights = state.flights.data;
  const { filters } = state.flights;
  const renderAll = Object.keys(filters).length === 0;

  let result;

  if (renderAll) {
    result = allFlights;
  } else {
    result = allFlights.filter((flight) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in filters) {
        if (
          key !== "launch_date_unix"
          && (flight[key] === undefined || flight[key] !== filters[key])
        ) {
          return false;
        }
      }
      return true;
    });

    if (filters.launch_date_unix) {
      const sortBy = filters.launch_date_unix === "newest"
        ? NewestLaunchDate
        : OldestLaunchDate;

      result = result.sort(sortBy);
    }
  }
  return result;
};

export { flightFilterSelector };

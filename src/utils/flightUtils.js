const getFlightSuccess = (flight) => {
  let message;

  if (flight.launch_success === null) {
    message = "N/A";
  } else if (flight.launch_success) {
    message = "Success";
  } else {
    message = "Failure";
  }

  return message;
};

const OldestLaunchDate = (a, b) => a.launch_date_unix - b.launch_date_unix;

const NewestLaunchDate = (a, b) => b.launch_date_unix - a.launch_date_unix;

export { getFlightSuccess, OldestLaunchDate, NewestLaunchDate };

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

export { getFlightSuccess };

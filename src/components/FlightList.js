import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "reactstrap";
import { FlightCard } from "./FlightCard";

const NUM_CARDS_PER_ROW = 4;

const FlightList = ({ flights }) => {
  // Calculate the number of rows to render
  const rows = [...Array(Math.ceil(flights.length / NUM_CARDS_PER_ROW))];

  const flightRows = rows.map((_, idx) => flights.slice(
    idx * NUM_CARDS_PER_ROW,
    idx * NUM_CARDS_PER_ROW + NUM_CARDS_PER_ROW,
  ));
  return (
    <Container fluid="xl">
      {flightRows.map((row, idx) => (
        <Row
          xs="1"
          sm="2"
          md="4"
          className="pt-5 pt-sm-5 pt-md-5 pt-lg-5 pt-xl-5"
          key={idx} // eslint-disable-line react/no-array-index-key
        >
          {row.map((flight) => (
            <FlightCard
              key={`${flight.flight_number}-${flight.launch_date_unix}`}
              flight={flight}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

FlightList.propTypes = {
  flights: PropTypes.instanceOf(Array).isRequired,
};

export { FlightList };

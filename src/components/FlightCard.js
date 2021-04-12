import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col,
} from "reactstrap";
import { truncate } from "../utils/truncate";
import { getFlightSuccess } from "../utils/flightUtils";

const FlightCard = ({ flight }) => (
  <Col>
    <Card>
      <CardHeader>{flight.mission_name}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{getFlightSuccess(flight)}</CardTitle>
        <CardText>
          {flight.details === null
            ? "Description: N/A"
            : truncate(flight.details, 50)}
        </CardText>
        <Button>View Details</Button>
      </CardBody>
      <CardFooter className="text-muted">
        Launch year:
        <em>{flight.launch_year}</em>
      </CardFooter>
    </Card>
  </Col>
);

FlightCard.propTypes = {
  flight: PropTypes.instanceOf(Object).isRequired,
};

export { FlightCard };

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { FlightList } from "./FlightList";
import { getFlights } from "../redux/thunks";

import { NavBar } from "./NavBar";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.flights.loading);
  const flights = useSelector((state) => state.flights.data);

  useEffect(() => {
    if (flights.length === 0) {
      dispatch(getFlights());
    }
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      ) : (
        <FlightList flights={flights} />
      )}
    </>
  );
};

export { HomePage };

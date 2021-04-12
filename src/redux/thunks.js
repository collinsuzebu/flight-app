import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFlights } from "../api/flight.service";

const getFlights = createAsyncThunk("flights/getFlights", () => fetchFlights());

export { getFlights };

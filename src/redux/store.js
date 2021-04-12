import { configureStore } from "@reduxjs/toolkit";
import { flightsReducer } from "./slices";

const store = configureStore({
  reducer: { flights: flightsReducer },
});

export { store };

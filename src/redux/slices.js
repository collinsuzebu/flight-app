import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getFlights } from "./thunks";

const flightsSlice = createSlice({
  name: "flights",
  initialState: initialState.flightsState,
  reducers: {},
  extraReducers: {
    [getFlights.pending]: (state) => {
      state.loading = true;
    },

    [getFlights.rejected]: (state) => {
      state.loading = false;
      state.error = "failed to load resource";
    },

    [getFlights.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
  },
});

export const flightsReducer = flightsSlice.reducer;

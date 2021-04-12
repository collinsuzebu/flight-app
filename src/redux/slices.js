import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getFlights } from "./thunks";

const flightsSlice = createSlice({
  name: "flights",
  initialState: initialState.flightsState,
  reducers: {
    filterByLaunchDate: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },

    filterByLaunchStatus: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },

    filterByUpcoming: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },

    removeFilter: (state, { payload }) => {
      delete state.filters[payload.filterName];
    },
  },

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

export const {
  filterByLaunchDate,
  filterByLaunchStatus,
  filterByUpcoming,
  removeFilter,
} = flightsSlice.actions;

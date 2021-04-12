import { initialState } from "./initialState";
import { getFlights } from "./thunks";
import {
  filterByLaunchDate,
  filterByLaunchStatus,
  filterByUpcoming,
  flightsReducer,
  removeFilter,
} from "./slices";

describe("flightSlice", () => {
  const initState = initialState.flightsState;

  describe("reducers", () => {
    it("returns returns initial state", () => {
      const state = flightsReducer(undefined, {});
      expect(state).toBe(initState);
    });

    it("filterByLaunchDate", () => {
      const filters = { launch_date_unix: "newest" };
      const state = flightsReducer(initState, filterByLaunchDate(filters));
      const expected = {
        ...initState,
        filters,
      };
      expect(state).toStrictEqual(expected);
    });

    it("filterByLaunchStatus", () => {
      const filters = { launch_success: true };
      const state = flightsReducer(initState, filterByLaunchStatus(filters));
      const expected = {
        ...initState,
        filters,
      };
      expect(state).toStrictEqual(expected);
    });

    it("filterByUpcoming", () => {
      const filters = { upcoming: true };
      const state = flightsReducer(initState, filterByUpcoming(filters));
      const expected = {
        ...initState,
        filters,
      };
      expect(state).toStrictEqual(expected);
    });

    it("removeFilter", () => {
      const filters = { upcoming: true };
      const filterToRemove = { filterName: "upcoming" };
      const state = flightsReducer(initState, filterByUpcoming(filters));
      const nstate = flightsReducer(state, removeFilter(filterToRemove));
      expect(nstate).toStrictEqual(initState);
    });

    it("can filter multiple arguments", () => {
      const filters = { upcoming: true, launch_success: true };
      const state = flightsReducer(initState, filterByUpcoming(filters));
      const nstate = flightsReducer(state, filterByLaunchStatus(filters));

      const expected = {
        ...initState,
        filters,
      };
      expect(nstate).toStrictEqual(expected);
    });
  });

  describe("extra reducers", () => {
    it("getFlights.pending", () => {
      const state = flightsReducer(initState, getFlights.pending());
      const expected = {
        ...initState,
        loading: true,
      };
      expect(state.loading).toBe(true);
      expect(state).toStrictEqual(expected);
    });

    it("getFlights.fulfilled", () => {
      const payload = [{ flight_number: 1 }, { flight_number: 2 }];
      const state = flightsReducer(initState, getFlights.fulfilled(payload));
      expect(state.loading).toBe(false);
      expect(state.data).toBe(payload);
    });

    it("getFlights.rejected", () => {
      const error = "failed to load resource";
      const state = flightsReducer(initState, getFlights.rejected(error));
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
    });
  });
});

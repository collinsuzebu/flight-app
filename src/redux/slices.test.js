import { initialState } from "./initialState";
import { flightsReducer } from "./slices";
import { getFlights } from "./thunks";

describe("flightSlice", () => {
  const initState = initialState.flightsState;

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

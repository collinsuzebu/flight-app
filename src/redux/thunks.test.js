import { fetchFlights } from "../api/flight.service";
import { initialState } from "./initialState";
import { getFlights } from "./thunks";
import { createMockStore } from "../test-utils/createMockStore";

jest.mock("../api/flight.service");

describe("Thunks", () => {
  it("getFlights", async () => {
    const store = createMockStore(initialState.flightsState);
    const mockPayload = [{ flight_number: 1 }, { flight_number: 2 }];
    const expectedAction = getFlights.fulfilled(mockPayload);

    fetchFlights.mockReturnValue(Promise.resolve(mockPayload));

    const thunk = store.dispatch(getFlights());

    thunk.then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toContainEqual(expectedAction);
    });
  });
});

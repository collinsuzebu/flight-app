import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = (state) => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  return mockStore(state);
};

export { createMockStore };

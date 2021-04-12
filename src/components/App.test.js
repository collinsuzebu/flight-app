import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  const appComponent = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it("mounts main component", () => {
    const wrapper = shallow(appComponent);
    expect(wrapper).toBeDefined();
  });
});

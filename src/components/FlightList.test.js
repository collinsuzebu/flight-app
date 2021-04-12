import React from "react";
import { mount, shallow } from "enzyme";
import { FlightList } from "./FlightList";

describe("FlightList", () => {
  const flights = [
    {
      flight_number: 1,
      details: "details 1",
      mission_name: "mission_name 1",
      launch_success: true,
      launch_year: 2020,
    },
    {
      flight_number: 2,
      details: "details 2",
      mission_name: "mission_name 2",
      launch_success: false,
      launch_year: 2021,
    },
  ];
  it("should render initial layout", () => {
    const wrapper = shallow(<FlightList flights={flights} />);
    expect(wrapper).toBeDefined();
  });

  it("should render <2> items in card list", () => {
    const wrapper = mount(<FlightList flights={flights} />);
    const cards = wrapper.find("Card");
    expect(cards).toHaveLength(2);
  });
});

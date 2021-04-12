import React from "react";
import { mount, shallow } from "enzyme";
import { FlightCard } from "./FlightCard";

describe("FlightCard", () => {
  const flight = {
    details: "details",
    mission_name: "mission_name",
    launch_success: true,
    launch_year: 2021,
  };
  it("should render initial layout", () => {
    const wrapper = shallow(<FlightCard flight={flight} />);
    expect(wrapper).toBeDefined();
  });

  it("should render items in card", () => {
    const wrapper = mount(<FlightCard flight={flight} />);
    const cardHeader = wrapper.find(".card-header").text();
    const cardBody = wrapper.find(".card-text").text();

    expect(cardHeader).toEqual(flight.mission_name);
    expect(cardBody).toEqual(flight.details);
  });
});

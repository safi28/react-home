import React from "react";
import renderer from "react-test-renderer";
import TestingEnvironment from "../../utils/tests/index";
import App from "../App";
import Dashboard from "../../pages/HomePages/Dashboard";
import Slider from "../../pages/HomePages/PublicPage/Slider";

describe("App", () => {
  it("should run App", () => {
    const tree = renderer
      .create(
        <TestingEnvironment value={{ user: { isLogged: true } }}>
          <App />
        </TestingEnvironment>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should run non-authenticated page", () => {
    const tree = renderer
      .create(
        <TestingEnvironment value={{ user: { isLogged: false } }}>
          <Slider />
        </TestingEnvironment>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render authentictad page", () => {
    const tree = renderer.create(
      <TestingEnvironment
        value={{ user: { isLogged: true } }}
      >
        <Dashboard />
      </TestingEnvironment>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});

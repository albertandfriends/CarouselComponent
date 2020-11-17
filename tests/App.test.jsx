import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from '../client/src/components/App.jsx';

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders The trip Title", () => {
    // test the component is rendered and mounted
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    // asserts that h5 contains "Hello World"
    const h5 = rootContainer.querySelector("h5");
    expect(h5.textContent).to.equal("Hello World");
  });
});
import React from "react";
import { Bar } from ".";

describe("<Bar />", () => {
  it("renders expected elements", () => {
    cy.mount(<Bar />);
    cy.findByText("Bar").should("be.visible");
  });
});
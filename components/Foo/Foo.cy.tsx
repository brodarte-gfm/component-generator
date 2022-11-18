import React from "react";
import { Foo } from ".";

describe("<Foo />", () => {
  it("renders expected elements", () => {
    cy.mount(<Foo />);
    cy.findByText("Foo").should("be.visible");
  });
});
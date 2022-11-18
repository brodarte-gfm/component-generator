import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Bar } from ".";

export default {
  title: "Bar",
  component: Bar,
} as ComponentMeta<typeof Bar>;

export const Default: ComponentStory<typeof Bar> = () => {
  return <Bar />;
};

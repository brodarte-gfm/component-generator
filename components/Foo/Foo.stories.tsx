import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Foo } from ".";

export default {
  title: "Foo",
  component: Foo,
} as ComponentMeta<typeof Foo>;

export const Default: ComponentStory<typeof Foo> = () => {
  return <Foo />;
};

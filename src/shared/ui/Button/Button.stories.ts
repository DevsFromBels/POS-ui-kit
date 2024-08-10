import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

/**
 * Все про настройку истории, тут:
 * @link https://storybook.js.org/docs/react/writing-stories/introduction
 *
 * @type {Meta<any>}
 */
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 *
 * Написание аргументов:
 * @link https://storybook.js.org/docs/react/writing-stories/args
 *
 * @type {Story}
 */
export const Primary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      window.console.log("Button primary clicked!");
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    onClick: () => {
      window.console.log("Button secondary clicked!");
    },
  },
};

export const Error: Story = {
  args: {
    label: "Button",
    buttonType: "error",
    onClick: () => {
      window.console.log("Button error clicked!");
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    buttonType: "disabled",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
    onClick: () => {
      console.log("Large button clicked");
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    onClick: () => {
      window.console.log("Small button clicked!");
    },
  },
};

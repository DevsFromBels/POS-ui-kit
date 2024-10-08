import { type ComponentPropsWithRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { clsxMerge } from "../../lib/utils";
import { buttonStyles } from "./button-styles";

type ButtonElementProps = ComponentPropsWithRef<"button">;

export interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}

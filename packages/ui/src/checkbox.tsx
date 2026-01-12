"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { ComponentProps } from "react";
import styles from "./checkbox.module.css";

export interface CheckboxRootProps extends ComponentProps<typeof BaseCheckbox.Root> {
  size?: "sm" | "md" | "lg";
}

function CheckboxRoot({ size = "md", className, children, ...props }: CheckboxRootProps) {
  return (
    <BaseCheckbox.Root
      className={`${styles.root} ${styles[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseCheckbox.Root>
  );
}

function CheckboxIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseCheckbox.Indicator>) {
  return (
    <BaseCheckbox.Indicator className={`${styles.indicator} ${className ?? ""}`} {...props}>
      <svg viewBox="0 0 12 12" fill="none" className={styles.icon}>
        <path
          d="M2 6L5 9L10 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseCheckbox.Indicator>
  );
}

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
};

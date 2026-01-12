"use client";

import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type { ComponentProps } from "react";
import styles from "./toggle.module.css";

export interface ToggleProps extends ComponentProps<typeof BaseToggle> {
  size?: "sm" | "md" | "lg";
}

export function Toggle({
  size = "md",
  className,
  ...props
}: ToggleProps) {
  return (
    <BaseToggle
      className={`${styles.toggle} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

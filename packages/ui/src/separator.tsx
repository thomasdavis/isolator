"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { ComponentProps } from "react";
import styles from "./separator.module.css";

export interface SeparatorProps extends ComponentProps<typeof BaseSeparator> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <BaseSeparator
      className={`${styles.separator} ${styles[orientation]} ${className ?? ""}`}
      {...props}
    />
  );
}

"use client";

import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import type { ComponentProps } from "react";
import styles from "./toggle-group.module.css";

export interface ToggleGroupRootProps extends ComponentProps<typeof BaseToggleGroup.Root> {
  size?: "sm" | "md" | "lg";
}

function ToggleGroupRoot({
  size = "md",
  className,
  ...props
}: ToggleGroupRootProps) {
  return (
    <BaseToggleGroup.Root
      className={`${styles.root} ${styles[`root-${size}`]} ${className ?? ""}`}
      {...props}
    />
  );
}

export interface ToggleGroupItemProps extends ComponentProps<typeof BaseToggleGroup.Item> {
  size?: "sm" | "md" | "lg";
}

function ToggleGroupItem({
  size = "md",
  className,
  ...props
}: ToggleGroupItemProps) {
  return (
    <BaseToggleGroup.Item
      className={`${styles.item} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

export const ToggleGroup = {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
};

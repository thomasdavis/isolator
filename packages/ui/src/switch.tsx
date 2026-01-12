"use client";

import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";
import styles from "./switch.module.css";

export interface SwitchRootProps extends ComponentProps<typeof BaseSwitch.Root> {
  size?: "sm" | "md" | "lg";
}

function SwitchRoot({ size = "md", className, children, ...props }: SwitchRootProps) {
  return (
    <BaseSwitch.Root
      className={`${styles.root} ${styles[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseSwitch.Root>
  );
}

function SwitchThumb({
  className,
  ...props
}: ComponentProps<typeof BaseSwitch.Thumb>) {
  return (
    <BaseSwitch.Thumb className={`${styles.thumb} ${className ?? ""}`} {...props} />
  );
}

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

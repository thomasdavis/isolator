"use client";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import type { ComponentProps } from "react";
import styles from "./meter.module.css";

export interface MeterRootProps extends ComponentProps<typeof BaseMeter.Root> {
  size?: "sm" | "md" | "lg";
}

function MeterRoot({
  size = "md",
  className,
  ...props
}: MeterRootProps) {
  return (
    <BaseMeter.Root
      className={`${styles.root} ${className ?? ""}`}
      {...props}
    />
  );
}

export interface MeterTrackProps extends ComponentProps<typeof BaseMeter.Track> {
  size?: "sm" | "md" | "lg";
}

function MeterTrack({
  size = "md",
  className,
  ...props
}: MeterTrackProps) {
  return (
    <BaseMeter.Track
      className={`${styles.track} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

function MeterIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseMeter.Indicator>) {
  return (
    <BaseMeter.Indicator
      className={`${styles.indicator} ${className ?? ""}`}
      {...props}
    />
  );
}

export const Meter = {
  Root: MeterRoot,
  Track: MeterTrack,
  Indicator: MeterIndicator,
};

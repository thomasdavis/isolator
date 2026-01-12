"use client";

import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps } from "react";
import styles from "./progress.module.css";

export interface ProgressRootProps extends ComponentProps<typeof BaseProgress.Root> {
  size?: "sm" | "md" | "lg";
}

function ProgressRoot({
  size = "md",
  className,
  ...props
}: ProgressRootProps) {
  return (
    <BaseProgress.Root
      className={`${styles.root} ${className ?? ""}`}
      {...props}
    />
  );
}

export interface ProgressTrackProps extends ComponentProps<typeof BaseProgress.Track> {
  size?: "sm" | "md" | "lg";
}

function ProgressTrack({
  size = "md",
  className,
  ...props
}: ProgressTrackProps) {
  return (
    <BaseProgress.Track
      className={`${styles.track} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseProgress.Indicator>) {
  return (
    <BaseProgress.Indicator
      className={`${styles.indicator} ${className ?? ""}`}
      {...props}
    />
  );
}

export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
};

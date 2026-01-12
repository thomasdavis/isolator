"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";
import type { ComponentProps } from "react";
import styles from "./slider.module.css";

function SliderRoot({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Root>) {
  return (
    <BaseSlider.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function SliderControl({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Control>) {
  return (
    <BaseSlider.Control className={`${styles.control} ${className ?? ""}`} {...props} />
  );
}

function SliderTrack({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Track>) {
  return (
    <BaseSlider.Track className={`${styles.track} ${className ?? ""}`} {...props} />
  );
}

function SliderIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Indicator>) {
  return (
    <BaseSlider.Indicator className={`${styles.indicator} ${className ?? ""}`} {...props} />
  );
}

function SliderThumb({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Thumb>) {
  return (
    <BaseSlider.Thumb className={`${styles.thumb} ${className ?? ""}`} {...props} />
  );
}

function SliderValue({
  className,
  ...props
}: ComponentProps<typeof BaseSlider.Value>) {
  return (
    <BaseSlider.Value className={`${styles.value} ${className ?? ""}`} {...props} />
  );
}

export const Slider = {
  Root: SliderRoot,
  Control: SliderControl,
  Track: SliderTrack,
  Indicator: SliderIndicator,
  Thumb: SliderThumb,
  Value: SliderValue,
};

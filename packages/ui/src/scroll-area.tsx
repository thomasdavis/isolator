"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";
import styles from "./scroll-area.module.css";

function ScrollAreaRoot({
  className,
  ...props
}: ComponentProps<typeof BaseScrollArea.Root>) {
  return (
    <BaseScrollArea.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function ScrollAreaViewport({
  className,
  ...props
}: ComponentProps<typeof BaseScrollArea.Viewport>) {
  return (
    <BaseScrollArea.Viewport className={`${styles.viewport} ${className ?? ""}`} {...props} />
  );
}

function ScrollAreaScrollbar({
  className,
  ...props
}: ComponentProps<typeof BaseScrollArea.Scrollbar>) {
  return (
    <BaseScrollArea.Scrollbar className={`${styles.scrollbar} ${className ?? ""}`} {...props} />
  );
}

function ScrollAreaThumb({
  className,
  ...props
}: ComponentProps<typeof BaseScrollArea.Thumb>) {
  return (
    <BaseScrollArea.Thumb className={`${styles.thumb} ${className ?? ""}`} {...props} />
  );
}

function ScrollAreaCorner({
  className,
  ...props
}: ComponentProps<typeof BaseScrollArea.Corner>) {
  return (
    <BaseScrollArea.Corner className={`${styles.corner} ${className ?? ""}`} {...props} />
  );
}

export const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
};

"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps } from "react";
import styles from "./tooltip.module.css";

function TooltipRoot(props: ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root {...props} />;
}

function TooltipTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseTooltip.Trigger>) {
  return (
    <BaseTooltip.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function TooltipPortal(props: ComponentProps<typeof BaseTooltip.Portal>) {
  return <BaseTooltip.Portal {...props} />;
}

function TooltipPositioner({
  className,
  ...props
}: ComponentProps<typeof BaseTooltip.Positioner>) {
  return (
    <BaseTooltip.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function TooltipPopup({
  className,
  ...props
}: ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function TooltipArrow({
  className,
  ...props
}: ComponentProps<typeof BaseTooltip.Arrow>) {
  return (
    <BaseTooltip.Arrow className={`${styles.arrow} ${className ?? ""}`} {...props} />
  );
}

function TooltipProvider(props: ComponentProps<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider {...props} />;
}

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
  Provider: TooltipProvider,
};

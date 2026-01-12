"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ComponentProps } from "react";
import styles from "./popover.module.css";

function PopoverRoot(props: ComponentProps<typeof BasePopover.Root>) {
  return <BasePopover.Root {...props} />;
}

function PopoverTrigger({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Trigger>) {
  return (
    <BasePopover.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function PopoverPortal(props: ComponentProps<typeof BasePopover.Portal>) {
  return <BasePopover.Portal {...props} />;
}

function PopoverPositioner({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Positioner>) {
  return (
    <BasePopover.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function PopoverPopup({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function PopoverArrow({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Arrow>) {
  return (
    <BasePopover.Arrow className={`${styles.arrow} ${className ?? ""}`} {...props} />
  );
}

function PopoverTitle({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title className={`${styles.title} ${className ?? ""}`} {...props} />
  );
}

function PopoverDescription({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description className={`${styles.description} ${className ?? ""}`} {...props} />
  );
}

function PopoverClose({
  className,
  ...props
}: ComponentProps<typeof BasePopover.Close>) {
  return (
    <BasePopover.Close className={`${styles.close} ${className ?? ""}`} {...props} />
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
};

"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import type { ComponentProps } from "react";
import styles from "./select.module.css";

function SelectRoot(props: ComponentProps<typeof BaseSelect.Root>) {
  return <BaseSelect.Root {...props} />;
}

export interface SelectTriggerProps extends ComponentProps<typeof BaseSelect.Trigger> {
  size?: "sm" | "md" | "lg";
}

function SelectTrigger({
  size = "md",
  className,
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      className={`${styles.trigger} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

function SelectValue({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Value>) {
  return (
    <BaseSelect.Value className={`${styles.value} ${className ?? ""}`} {...props} />
  );
}

function SelectIcon({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Icon>) {
  return (
    <BaseSelect.Icon className={`${styles.icon} ${className ?? ""}`} {...props}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseSelect.Icon>
  );
}

function SelectPortal(props: ComponentProps<typeof BaseSelect.Portal>) {
  return <BaseSelect.Portal {...props} />;
}

function SelectPositioner({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Positioner>) {
  return (
    <BaseSelect.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function SelectPopup({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function SelectItem({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function SelectItemIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.ItemIndicator>) {
  return (
    <BaseSelect.ItemIndicator className={`${styles.itemIndicator} ${className ?? ""}`} {...props}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseSelect.ItemIndicator>
  );
}

function SelectItemText(props: ComponentProps<typeof BaseSelect.ItemText>) {
  return <BaseSelect.ItemText {...props} />;
}

function SelectGroup(props: ComponentProps<typeof BaseSelect.Group>) {
  return <BaseSelect.Group {...props} />;
}

function SelectGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel className={`${styles.groupLabel} ${className ?? ""}`} {...props} />
  );
}

function SelectSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseSelect.Separator>) {
  return (
    <BaseSelect.Separator className={`${styles.separator} ${className ?? ""}`} {...props} />
  );
}

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
};

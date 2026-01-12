"use client";

import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import type { ComponentProps } from "react";
import styles from "./context-menu.module.css";

function ContextMenuRoot(props: ComponentProps<typeof BaseContextMenu.Root>) {
  return <BaseContextMenu.Root {...props} />;
}

function ContextMenuTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Trigger>) {
  return (
    <BaseContextMenu.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuPortal(props: ComponentProps<typeof BaseContextMenu.Portal>) {
  return <BaseContextMenu.Portal {...props} />;
}

function ContextMenuPositioner({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Positioner>) {
  return (
    <BaseContextMenu.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuPopup({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Popup>) {
  return (
    <BaseContextMenu.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuItem({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Item>) {
  return (
    <BaseContextMenu.Item className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuGroup(props: ComponentProps<typeof BaseContextMenu.Group>) {
  return <BaseContextMenu.Group {...props} />;
}

function ContextMenuGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.GroupLabel>) {
  return (
    <BaseContextMenu.GroupLabel className={`${styles.groupLabel} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Separator>) {
  return (
    <BaseContextMenu.Separator className={`${styles.separator} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuCheckboxItem({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.CheckboxItem>) {
  return (
    <BaseContextMenu.CheckboxItem className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuCheckboxItemIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.CheckboxItemIndicator>) {
  return (
    <BaseContextMenu.CheckboxItemIndicator className={`${styles.itemIndicator} ${className ?? ""}`} {...props}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseContextMenu.CheckboxItemIndicator>
  );
}

function ContextMenuRadioGroup(props: ComponentProps<typeof BaseContextMenu.RadioGroup>) {
  return <BaseContextMenu.RadioGroup {...props} />;
}

function ContextMenuRadioItem({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.RadioItem>) {
  return (
    <BaseContextMenu.RadioItem className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function ContextMenuRadioItemIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.RadioItemIndicator>) {
  return (
    <BaseContextMenu.RadioItemIndicator className={`${styles.itemIndicator} ${className ?? ""}`} {...props}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="3" fill="currentColor"/>
      </svg>
    </BaseContextMenu.RadioItemIndicator>
  );
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Positioner: ContextMenuPositioner,
  Popup: ContextMenuPopup,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  Separator: ContextMenuSeparator,
  CheckboxItem: ContextMenuCheckboxItem,
  CheckboxItemIndicator: ContextMenuCheckboxItemIndicator,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  RadioItemIndicator: ContextMenuRadioItemIndicator,
};

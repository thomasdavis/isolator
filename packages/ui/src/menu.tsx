"use client";

import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ComponentProps } from "react";
import styles from "./menu.module.css";

function MenuRoot(props: ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root {...props} />;
}

function MenuTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Trigger>) {
  return (
    <BaseMenu.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function MenuPortal(props: ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function MenuPositioner({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function MenuPopup({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function MenuArrow({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Arrow>) {
  return (
    <BaseMenu.Arrow className={`${styles.arrow} ${className ?? ""}`} {...props} />
  );
}

function MenuItem({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function MenuGroup(props: ComponentProps<typeof BaseMenu.Group>) {
  return <BaseMenu.Group {...props} />;
}

function MenuGroupLabel({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel className={`${styles.groupLabel} ${className ?? ""}`} {...props} />
  );
}

function MenuSeparator({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator className={`${styles.separator} ${className ?? ""}`} {...props} />
  );
}

function MenuCheckboxItem({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return (
    <BaseMenu.CheckboxItem className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function MenuCheckboxItemIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.CheckboxItemIndicator>) {
  return (
    <BaseMenu.CheckboxItemIndicator className={`${styles.itemIndicator} ${className ?? ""}`} {...props}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseMenu.CheckboxItemIndicator>
  );
}

function MenuRadioGroup(props: ComponentProps<typeof BaseMenu.RadioGroup>) {
  return <BaseMenu.RadioGroup {...props} />;
}

function MenuRadioItem({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.RadioItem>) {
  return (
    <BaseMenu.RadioItem className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function MenuRadioItemIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.RadioItemIndicator>) {
  return (
    <BaseMenu.RadioItemIndicator className={`${styles.itemIndicator} ${className ?? ""}`} {...props}>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="3" fill="currentColor"/>
      </svg>
    </BaseMenu.RadioItemIndicator>
  );
}

function MenuSubmenuTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger className={`${styles.item} ${styles.submenuTrigger} ${className ?? ""}`} {...props} />
  );
}

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Arrow: MenuArrow,
  Item: MenuItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Separator: MenuSeparator,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  SubmenuTrigger: MenuSubmenuTrigger,
};

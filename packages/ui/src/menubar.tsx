"use client";

import * as React from "react";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import styles from "./menubar.module.css";

export interface MenubarProps {
  children: React.ReactNode;
  className?: string;
}

export function Menubar({ className, children, ...props }: MenubarProps) {
  return (
    <BaseMenubar
      className={`${styles.menubar} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseMenubar>
  );
}

export interface MenubarMenuProps {
  children: React.ReactNode;
}

export function MenubarMenu({ children }: MenubarMenuProps) {
  return <BaseMenu.Root>{children}</BaseMenu.Root>;
}

export interface MenubarTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarTrigger({ className, children }: MenubarTriggerProps) {
  return (
    <BaseMenu.Trigger className={`${styles.trigger} ${className ?? ""}`}>
      {children}
    </BaseMenu.Trigger>
  );
}

export interface MenubarContentProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarContent({ className, children }: MenubarContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner sideOffset={4}>
        <BaseMenu.Popup className={`${styles.content} ${className ?? ""}`}>
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export interface MenubarItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function MenubarItem({ className, children, onSelect, ...props }: MenubarItemProps) {
  return (
    <BaseMenu.Item
      className={`${styles.item} ${className ?? ""}`}
      onClick={onSelect}
      {...props}
    >
      {children}
    </BaseMenu.Item>
  );
}

export interface MenubarSeparatorProps {
  className?: string;
}

export function MenubarSeparator({ className }: MenubarSeparatorProps) {
  return (
    <BaseMenu.Separator className={`${styles.separator} ${className ?? ""}`} />
  );
}

export interface MenubarLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarLabel({ className, children }: MenubarLabelProps) {
  return (
    <BaseMenu.GroupLabel className={`${styles.label} ${className ?? ""}`}>
      {children}
    </BaseMenu.GroupLabel>
  );
}

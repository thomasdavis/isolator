"use client";

import * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import styles from "./navigation-menu.module.css";

export interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenu({ className, children, ...props }: NavigationMenuProps) {
  return (
    <BaseNavigationMenu.Root
      className={`${styles.nav} ${className ?? ""}`}
      {...props}
    >
      <BaseNavigationMenu.List className={styles.list}>
        {children}
      </BaseNavigationMenu.List>
      <BaseNavigationMenu.Portal>
        <BaseNavigationMenu.Positioner sideOffset={8}>
          <BaseNavigationMenu.Popup className={styles.popup} />
        </BaseNavigationMenu.Positioner>
      </BaseNavigationMenu.Portal>
    </BaseNavigationMenu.Root>
  );
}

export interface NavigationMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuItem({ className, children }: NavigationMenuItemProps) {
  return (
    <BaseNavigationMenu.Item className={`${styles.item} ${className ?? ""}`}>
      {children}
    </BaseNavigationMenu.Item>
  );
}

export interface NavigationMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuTrigger({ className, children }: NavigationMenuTriggerProps) {
  return (
    <BaseNavigationMenu.Trigger className={`${styles.trigger} ${className ?? ""}`}>
      {children}
      <span className={styles.chevron}>▾</span>
    </BaseNavigationMenu.Trigger>
  );
}

export interface NavigationMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuContent({ className, children }: NavigationMenuContentProps) {
  return (
    <BaseNavigationMenu.Content className={`${styles.content} ${className ?? ""}`}>
      {children}
    </BaseNavigationMenu.Content>
  );
}

export interface NavigationMenuLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <BaseNavigationMenu.Link
      className={`${styles.link} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Link>
  );
}


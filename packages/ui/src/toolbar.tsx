"use client";

import * as React from "react";
import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";
import styles from "./toolbar.module.css";

export interface ToolbarProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Toolbar({
  className,
  orientation = "horizontal",
  children,
  ...props
}: ToolbarProps) {
  return (
    <BaseToolbar.Root
      className={`${styles.toolbar} ${styles[orientation]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseToolbar.Root>
  );
}

export interface ToolbarButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ToolbarButton({
  className,
  children,
  ...props
}: ToolbarButtonProps) {
  return (
    <BaseToolbar.Button
      className={`${styles.button} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseToolbar.Button>
  );
}

export interface ToolbarSeparatorProps {
  className?: string;
}

export function ToolbarSeparator({ className }: ToolbarSeparatorProps) {
  return (
    <BaseToolbar.Separator
      className={`${styles.separator} ${className ?? ""}`}
    />
  );
}

export interface ToolbarGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ToolbarGroup({ className, children }: ToolbarGroupProps) {
  return (
    <BaseToolbar.Group className={`${styles.group} ${className ?? ""}`}>
      {children}
    </BaseToolbar.Group>
  );
}

export interface ToolbarLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function ToolbarLink({ className, children, ...props }: ToolbarLinkProps) {
  return (
    <BaseToolbar.Link
      className={`${styles.link} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseToolbar.Link>
  );
}

"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

import type { ReactNode } from "react";
import styles from "./badge.module.css";

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className ?? ""}`}>
      {children}
    </span>
  );
}

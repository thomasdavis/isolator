import type { ReactNode } from "react";
import styles from "./code.module.css";

export interface CodeProps {
  children: ReactNode;
  className?: string;
  variant?: "inline" | "block";
}

export function Code({
  children,
  className,
  variant = "inline",
}: CodeProps) {
  if (variant === "block") {
    return (
      <pre className={`${styles.block} ${className ?? ""}`}>
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code className={`${styles.inline} ${className ?? ""}`}>
      {children}
    </code>
  );
}

import type { ReactNode } from "react";
import styles from "./card.module.css";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[`padding-${padding}`]} ${className ?? ""}`}>
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={`${styles.header} ${className ?? ""}`}>
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function CardTitle({ children, className, as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className={`${styles.title} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}

export interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={`${styles.description} ${className ?? ""}`}>
      {children}
    </p>
  );
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={`${styles.content} ${className ?? ""}`}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={`${styles.footer} ${className ?? ""}`}>
      {children}
    </div>
  );
}

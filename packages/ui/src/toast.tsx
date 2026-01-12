"use client";

import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ComponentProps } from "react";
import styles from "./toast.module.css";

export interface ToastRootProps extends ComponentProps<typeof BaseToast.Root> {
  variant?: "default" | "success" | "warning" | "danger";
}

function ToastRoot({
  variant = "default",
  className,
  ...props
}: ToastRootProps) {
  return (
    <BaseToast.Root
      className={`${styles.root} ${styles[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}

function ToastViewport({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Viewport>) {
  return (
    <BaseToast.Viewport className={`${styles.viewport} ${className ?? ""}`} {...props} />
  );
}

function ToastTitle({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Title>) {
  return (
    <BaseToast.Title className={`${styles.title} ${className ?? ""}`} {...props} />
  );
}

function ToastDescription({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Description>) {
  return (
    <BaseToast.Description className={`${styles.description} ${className ?? ""}`} {...props} />
  );
}

function ToastAction({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Action>) {
  return (
    <BaseToast.Action className={`${styles.action} ${className ?? ""}`} {...props} />
  );
}

function ToastClose({
  className,
  ...props
}: ComponentProps<typeof BaseToast.Close>) {
  return (
    <BaseToast.Close className={`${styles.close} ${className ?? ""}`} {...props} />
  );
}

export const Toast = {
  Root: ToastRoot,
  Viewport: ToastViewport,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
};

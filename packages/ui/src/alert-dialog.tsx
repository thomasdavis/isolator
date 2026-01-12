"use client";

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import type { ComponentProps } from "react";
import styles from "./alert-dialog.module.css";

function AlertDialogRoot(props: ComponentProps<typeof BaseAlertDialog.Root>) {
  return <BaseAlertDialog.Root {...props} />;
}

function AlertDialogTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return (
    <BaseAlertDialog.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function AlertDialogPortal(props: ComponentProps<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal {...props} />;
}

function AlertDialogBackdrop({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Backdrop>) {
  return (
    <BaseAlertDialog.Backdrop className={`${styles.backdrop} ${className ?? ""}`} {...props} />
  );
}

function AlertDialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title className={`${styles.title} ${className ?? ""}`} {...props} />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Description>) {
  return (
    <BaseAlertDialog.Description className={`${styles.description} ${className ?? ""}`} {...props} />
  );
}

function AlertDialogClose({
  className,
  ...props
}: ComponentProps<typeof BaseAlertDialog.Close>) {
  return (
    <BaseAlertDialog.Close className={`${styles.close} ${className ?? ""}`} {...props} />
  );
}

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Backdrop: AlertDialogBackdrop,
  Popup: AlertDialogPopup,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Close: AlertDialogClose,
};

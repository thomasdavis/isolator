"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentProps } from "react";
import styles from "./dialog.module.css";

function DialogRoot(props: ComponentProps<typeof BaseDialog.Root>) {
  return <BaseDialog.Root {...props} />;
}

function DialogTrigger({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Trigger>) {
  return (
    <BaseDialog.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function DialogPortal(props: ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Backdrop>) {
  return (
    <BaseDialog.Backdrop className={`${styles.backdrop} ${className ?? ""}`} {...props} />
  );
}

function DialogPopup({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function DialogTitle({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title className={`${styles.title} ${className ?? ""}`} {...props} />
  );
}

function DialogDescription({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description className={`${styles.description} ${className ?? ""}`} {...props} />
  );
}

function DialogClose({
  className,
  ...props
}: ComponentProps<typeof BaseDialog.Close>) {
  return (
    <BaseDialog.Close className={`${styles.close} ${className ?? ""}`} {...props} />
  );
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Popup: DialogPopup,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
};

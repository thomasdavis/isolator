"use client";

import { Form as BaseForm } from "@base-ui/react/form";
import type { ComponentProps } from "react";
import styles from "./form.module.css";

function FormRoot({
  className,
  ...props
}: ComponentProps<typeof BaseForm.Root>) {
  return (
    <BaseForm.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function FormSubmit({
  className,
  ...props
}: ComponentProps<typeof BaseForm.Submit>) {
  return (
    <BaseForm.Submit className={`${styles.submit} ${className ?? ""}`} {...props} />
  );
}

export const Form = {
  Root: FormRoot,
  Submit: FormSubmit,
};

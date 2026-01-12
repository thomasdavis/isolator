"use client";

import { Field as BaseField } from "@base-ui/react/field";
import type { ComponentProps } from "react";
import styles from "./field.module.css";

function FieldRoot({
  className,
  ...props
}: ComponentProps<typeof BaseField.Root>) {
  return (
    <BaseField.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function FieldLabel({
  className,
  ...props
}: ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label className={`${styles.label} ${className ?? ""}`} {...props} />
  );
}

function FieldDescription({
  className,
  ...props
}: ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description className={`${styles.description} ${className ?? ""}`} {...props} />
  );
}

function FieldError({
  className,
  ...props
}: ComponentProps<typeof BaseField.Error>) {
  return (
    <BaseField.Error className={`${styles.error} ${className ?? ""}`} {...props} />
  );
}

function FieldControl({
  className,
  ...props
}: ComponentProps<typeof BaseField.Control>) {
  return (
    <BaseField.Control className={`${styles.control} ${className ?? ""}`} {...props} />
  );
}

function FieldValidity(props: ComponentProps<typeof BaseField.Validity>) {
  return <BaseField.Validity {...props} />;
}

export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
  Control: FieldControl,
  Validity: FieldValidity,
};

"use client";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import type { ComponentProps } from "react";
import styles from "./number-field.module.css";

function NumberFieldRoot({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Root>) {
  return (
    <BaseNumberField.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function NumberFieldGroup({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Group>) {
  return (
    <BaseNumberField.Group className={`${styles.group} ${className ?? ""}`} {...props} />
  );
}

export interface NumberFieldInputProps extends ComponentProps<typeof BaseNumberField.Input> {
  inputSize?: "sm" | "md" | "lg";
}

function NumberFieldInput({
  inputSize = "md",
  className,
  ...props
}: NumberFieldInputProps) {
  return (
    <BaseNumberField.Input
      className={`${styles.input} ${styles[inputSize]} ${className ?? ""}`}
      {...props}
    />
  );
}

function NumberFieldIncrement({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Increment>) {
  return (
    <BaseNumberField.Increment className={`${styles.button} ${styles.increment} ${className ?? ""}`} {...props}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 2V8M2 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </BaseNumberField.Increment>
  );
}

function NumberFieldDecrement({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.Decrement>) {
  return (
    <BaseNumberField.Decrement className={`${styles.button} ${styles.decrement} ${className ?? ""}`} {...props}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </BaseNumberField.Decrement>
  );
}

function NumberFieldScrubArea({
  className,
  ...props
}: ComponentProps<typeof BaseNumberField.ScrubArea>) {
  return (
    <BaseNumberField.ScrubArea className={`${styles.scrubArea} ${className ?? ""}`} {...props} />
  );
}

function NumberFieldScrubAreaCursor(props: ComponentProps<typeof BaseNumberField.ScrubAreaCursor>) {
  return <BaseNumberField.ScrubAreaCursor {...props} />;
}

export const NumberField = {
  Root: NumberFieldRoot,
  Group: NumberFieldGroup,
  Input: NumberFieldInput,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
  ScrubArea: NumberFieldScrubArea,
  ScrubAreaCursor: NumberFieldScrubAreaCursor,
};

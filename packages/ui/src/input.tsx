"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentProps } from "react";
import styles from "./input.module.css";

export interface InputProps extends ComponentProps<typeof BaseInput> {
  variant?: "default" | "error" | "success";
  inputSize?: "sm" | "md" | "lg";
}

export function Input({
  variant = "default",
  inputSize = "md",
  className,
  ...props
}: InputProps) {
  return (
    <BaseInput
      className={`${styles.input} ${styles[variant]} ${styles[inputSize]} ${className ?? ""}`}
      {...props}
    />
  );
}

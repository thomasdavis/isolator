"use client";

import { Form as BaseForm } from "@base-ui/react/form";
import { Button } from "./button";
import type { ComponentProps, ReactNode, FormHTMLAttributes } from "react";
import styles from "./form.module.css";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <BaseForm className={`${styles.root} ${className ?? ""}`} {...props}>
      {children}
    </BaseForm>
  );
}

export interface FormSubmitProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function FormSubmit({ className, children, ...props }: FormSubmitProps) {
  return (
    <Button type="submit" className={`${styles.submit} ${className ?? ""}`} {...props}>
      {children}
    </Button>
  );
}

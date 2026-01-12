"use client";

import * as React from "react";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { Checkbox } from "./checkbox";
import styles from "./checkbox-group.module.css";

export interface CheckboxGroupProps {
  children: React.ReactNode;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  className?: string;
  allValues?: string[];
}

export function CheckboxGroup({
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <BaseCheckboxGroup
      className={`${styles.group} ${className ?? ""}`}
      {...props}
    >
      {children}
    </BaseCheckboxGroup>
  );
}

export interface CheckboxGroupItemProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export function CheckboxGroupItem({ value, label, disabled }: CheckboxGroupItemProps) {
  return (
    <label className={styles.item}>
      <Checkbox.Root name={value} disabled={disabled}>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <span className={styles.label}>{label}</span>
    </label>
  );
}

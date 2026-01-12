"use client";

import * as React from "react";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import styles from "./combobox.module.css";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Combobox({
  options,
  placeholder = "Select or type...",
  className,
  ...props
}: ComboboxProps) {
  return (
    <div className={`${styles.root} ${className ?? ""}`}>
    <BaseCombobox.Root {...props}>
      <BaseCombobox.Input
        className={styles.input}
        placeholder={placeholder}
      />
      <BaseCombobox.Trigger className={styles.trigger}>
        <span className={styles.chevron}>▾</span>
      </BaseCombobox.Trigger>
      <BaseCombobox.Portal>
        <BaseCombobox.Positioner sideOffset={4}>
          <BaseCombobox.Popup className={styles.popup}>
            {options.map((option) => (
              <BaseCombobox.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={styles.option}
              >
                {option.label}
                <BaseCombobox.ItemIndicator className={styles.indicator}>
                  ✓
                </BaseCombobox.ItemIndicator>
              </BaseCombobox.Item>
            ))}
            <BaseCombobox.Empty className={styles.noOptions}>
              No results found
            </BaseCombobox.Empty>
          </BaseCombobox.Popup>
        </BaseCombobox.Positioner>
      </BaseCombobox.Portal>
    </BaseCombobox.Root>
    </div>
  );
}

// Also export individual parts for more complex use cases
export const ComboboxRoot = BaseCombobox.Root;
export const ComboboxInput = BaseCombobox.Input;
export const ComboboxTrigger = BaseCombobox.Trigger;
export const ComboboxPortal = BaseCombobox.Portal;
export const ComboboxPositioner = BaseCombobox.Positioner;
export const ComboboxPopup = BaseCombobox.Popup;
export const ComboboxItem = BaseCombobox.Item;
export const ComboboxItemIndicator = BaseCombobox.ItemIndicator;
export const ComboboxEmpty = BaseCombobox.Empty;

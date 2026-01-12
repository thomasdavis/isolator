"use client";

import * as React from "react";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import styles from "./autocomplete.module.css";

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Autocomplete({
  options,
  placeholder = "Search...",
  className,
  ...props
}: AutocompleteProps) {
  return (
    <div className={`${styles.root} ${className ?? ""}`}>
    <BaseAutocomplete.Root {...props}>
      <BaseAutocomplete.Input
        className={styles.input}
        placeholder={placeholder}
      />
      <BaseAutocomplete.Portal>
        <BaseAutocomplete.Positioner sideOffset={4}>
          <BaseAutocomplete.Popup className={styles.popup}>
            {options.map((option) => (
              <BaseAutocomplete.Item
                key={option.value}
                value={option.value}
                className={styles.option}
              >
                {option.label}
              </BaseAutocomplete.Item>
            ))}
            <BaseAutocomplete.Empty className={styles.noOptions}>
              No results found
            </BaseAutocomplete.Empty>
          </BaseAutocomplete.Popup>
        </BaseAutocomplete.Positioner>
      </BaseAutocomplete.Portal>
    </BaseAutocomplete.Root>
    </div>
  );
}

// Also export individual parts for more complex use cases
export const AutocompleteRoot = BaseAutocomplete.Root;
export const AutocompleteInput = BaseAutocomplete.Input;
export const AutocompletePortal = BaseAutocomplete.Portal;
export const AutocompletePositioner = BaseAutocomplete.Positioner;
export const AutocompletePopup = BaseAutocomplete.Popup;
export const AutocompleteItem = BaseAutocomplete.Item;
export const AutocompleteEmpty = BaseAutocomplete.Empty;

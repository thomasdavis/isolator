"use client";

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import type { ComponentProps } from "react";
import styles from "./radio.module.css";

function RadioGroupRoot({
  className,
  ...props
}: ComponentProps<typeof BaseRadioGroup.Root>) {
  return (
    <BaseRadioGroup.Root className={`${styles.group} ${className ?? ""}`} {...props} />
  );
}

export interface RadioRootProps extends ComponentProps<typeof BaseRadio.Root> {
  size?: "sm" | "md" | "lg";
}

function RadioRoot({ size = "md", className, children, ...props }: RadioRootProps) {
  return (
    <BaseRadio.Root className={`${styles.root} ${styles[size]} ${className ?? ""}`} {...props}>
      {children}
    </BaseRadio.Root>
  );
}

function RadioIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseRadio.Indicator>) {
  return (
    <BaseRadio.Indicator className={`${styles.indicator} ${className ?? ""}`} {...props} />
  );
}

export const RadioGroup = {
  Root: RadioGroupRoot,
};

export const Radio = {
  Root: RadioRoot,
  Indicator: RadioIndicator,
};

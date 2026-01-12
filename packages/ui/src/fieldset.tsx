"use client";

import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import type { ComponentProps } from "react";
import styles from "./fieldset.module.css";

function FieldsetRoot({
  className,
  ...props
}: ComponentProps<typeof BaseFieldset.Root>) {
  return (
    <BaseFieldset.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function FieldsetLegend({
  className,
  ...props
}: ComponentProps<typeof BaseFieldset.Legend>) {
  return (
    <BaseFieldset.Legend className={`${styles.legend} ${className ?? ""}`} {...props} />
  );
}

export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
};

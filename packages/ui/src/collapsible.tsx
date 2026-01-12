"use client";

import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import type { ComponentProps } from "react";
import styles from "./collapsible.module.css";

function CollapsibleRoot({
  className,
  ...props
}: ComponentProps<typeof BaseCollapsible.Root>) {
  return (
    <BaseCollapsible.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props}>
      {children}
      <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseCollapsible.Trigger>
  );
}

function CollapsiblePanel({
  className,
  ...props
}: ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel className={`${styles.panel} ${className ?? ""}`} {...props} />
  );
}

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};

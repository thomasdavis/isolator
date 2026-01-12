"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ComponentProps } from "react";
import styles from "./accordion.module.css";

function AccordionRoot({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Root>) {
  return (
    <BaseAccordion.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function AccordionItem({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item className={`${styles.item} ${className ?? ""}`} {...props} />
  );
}

function AccordionHeader({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Header>) {
  return (
    <BaseAccordion.Header className={`${styles.header} ${className ?? ""}`} {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props}>
      {children}
      <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </BaseAccordion.Trigger>
  );
}

function AccordionPanel({
  className,
  ...props
}: ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel className={`${styles.panel} ${className ?? ""}`} {...props} />
  );
}

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
};

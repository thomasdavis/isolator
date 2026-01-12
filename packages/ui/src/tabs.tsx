"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";
import styles from "./tabs.module.css";

function TabsRoot({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root className={`${styles.root} ${className ?? ""}`} {...props} />
  );
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List className={`${styles.list} ${className ?? ""}`} {...props} />
  );
}

function TabsTab({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab className={`${styles.tab} ${className ?? ""}`} {...props} />
  );
}

function TabsIndicator({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Indicator>) {
  return (
    <BaseTabs.Indicator className={`${styles.indicator} ${className ?? ""}`} {...props} />
  );
}

function TabsPanel({
  className,
  ...props
}: ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel className={`${styles.panel} ${className ?? ""}`} {...props} />
  );
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
};

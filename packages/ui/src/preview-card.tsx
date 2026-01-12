"use client";

import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type { ComponentProps } from "react";
import styles from "./preview-card.module.css";

function PreviewCardRoot(props: ComponentProps<typeof BasePreviewCard.Root>) {
  return <BasePreviewCard.Root {...props} />;
}

function PreviewCardTrigger({
  className,
  ...props
}: ComponentProps<typeof BasePreviewCard.Trigger>) {
  return (
    <BasePreviewCard.Trigger className={`${styles.trigger} ${className ?? ""}`} {...props} />
  );
}

function PreviewCardPortal(props: ComponentProps<typeof BasePreviewCard.Portal>) {
  return <BasePreviewCard.Portal {...props} />;
}

function PreviewCardPositioner({
  className,
  ...props
}: ComponentProps<typeof BasePreviewCard.Positioner>) {
  return (
    <BasePreviewCard.Positioner className={`${styles.positioner} ${className ?? ""}`} {...props} />
  );
}

function PreviewCardPopup({
  className,
  ...props
}: ComponentProps<typeof BasePreviewCard.Popup>) {
  return (
    <BasePreviewCard.Popup className={`${styles.popup} ${className ?? ""}`} {...props} />
  );
}

function PreviewCardArrow({
  className,
  ...props
}: ComponentProps<typeof BasePreviewCard.Arrow>) {
  return (
    <BasePreviewCard.Arrow className={`${styles.arrow} ${className ?? ""}`} {...props} />
  );
}

export const PreviewCard = {
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  Portal: PreviewCardPortal,
  Positioner: PreviewCardPositioner,
  Popup: PreviewCardPopup,
  Arrow: PreviewCardArrow,
};

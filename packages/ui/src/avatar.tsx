"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { ComponentProps } from "react";
import styles from "./avatar.module.css";

export interface AvatarRootProps extends ComponentProps<typeof BaseAvatar.Root> {
  size?: "sm" | "md" | "lg";
}

function AvatarRoot({
  size = "md",
  className,
  ...props
}: AvatarRootProps) {
  return (
    <BaseAvatar.Root
      className={`${styles.root} ${styles[size]} ${className ?? ""}`}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image className={`${styles.image} ${className ?? ""}`} {...props} />
  );
}

function AvatarFallback({
  className,
  ...props
}: ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback className={`${styles.fallback} ${className ?? ""}`} {...props} />
  );
}

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
};

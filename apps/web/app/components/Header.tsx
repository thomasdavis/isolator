"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>▸</span>
          <span className={styles.logoText}>unsandbox</span>
          <span className={styles.logoDomain}>.com</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/playground" className={styles.playgroundBtn}>
            <span className={styles.playIcon}>▶</span>
            Playground
          </Link>
          <Link href="/console" className={styles.consoleBtn}>
            Console
          </Link>
        </div>
      </div>
    </header>
  );
}

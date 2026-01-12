import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
  product: [
    { label: "Execute", href: "/docs" },
    { label: "Sessions", href: "/docs#sessions" },
    { label: "Services", href: "/docs#services" },
    { label: "Snapshots", href: "/docs#snapshots" },
  ],
  developers: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs" },
    { label: "CLI", href: "/docs#cli" },
    { label: "Examples", href: "/docs#examples" },
  ],
  company: [
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>▸</span>
              <span className={styles.logoText}>unsandbox</span>
            </div>
            <p className={styles.tagline}>
              Run code safely anywhere, instantly.
            </p>
            <div className={styles.status}>
              <span className={styles.statusDot}></span>
              <span>All systems operational</span>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Product</h4>
            <ul className={styles.linkList}>
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Developers</h4>
            <ul className={styles.linkList}>
              {footerLinks.developers.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.ctas}>
          <Link href="/playground" className={styles.ctaBtn}>
            Open Playground
          </Link>
          <Link href="/docs" className={styles.ctaBtn}>
            Read Quickstart
          </Link>
          <Link href="/pricing" className={styles.ctaBtnPrimary}>
            Get Free API Key
          </Link>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} unsandbox. Remote code execution infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
  product: [
    { label: "Playground", href: "/playground" },
    { label: "Console", href: "/console" },
    { label: "Pricing", href: "/pricing" },
    { label: "Pricing for Agents", href: "/pricing#agents" },
  ],
  developers: [
    { label: "Docs", href: "/docs" },
    { label: "CLI", href: "/docs#cli" },
    { label: "Blog", href: "/blog" },
    { label: "llms.txt", href: "/llms.txt" },
  ],
  company: [
    { label: "Sitemap", href: "/sitemap" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
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
              <span className={styles.logoDomain}>.com</span>
            </div>
            <p className={styles.tagline}>
              Anonymous remote code, compile, &amp; execution API for humans &amp; machine learning agents.
            </p>
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

        <div className={styles.quote}>
          <p>&ldquo;This service validates its own documentation across 42+ languages without installing a single compiler locally. Every code example is executed remotely through the API it documents.&rdquo;</p>
        </div>

        <div className={styles.bottom}>
          <p>unsandbox.com &copy; {new Date().getFullYear()} &mdash; Anonymous remote code, compile, &amp; execution API for humans &amp; machine learning agents.</p>
        </div>
      </div>
    </footer>
  );
}

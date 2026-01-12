import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./pricing.module.css";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For experimentation and learning",
    features: [
      "1 concurrent container",
      "1 request per 42 seconds",
      "Execute mode only",
      "5 minute TTL max",
      "Community support",
    ],
    cta: "Get Started",
    ctaHref: "/console",
    popular: false,
  },
  {
    name: "Development",
    price: "$7",
    period: "/month",
    description: "For individual developers and side projects",
    specs: "1 vCPU, 2GB RAM",
    features: [
      "5 concurrent containers",
      "100 requests/minute",
      "Execute + Sessions",
      "30 minute TTL",
      "Snapshots (10 max)",
      "Email support",
    ],
    cta: "Start Trial",
    ctaHref: "/console",
    popular: true,
    savings: "Save 77% vs AWS ECS Fargate",
  },
  {
    name: "Production",
    price: "$91",
    period: "/month",
    description: "For growing teams and production apps",
    specs: "4 concurrent, 91 RPM",
    features: [
      "25 concurrent containers",
      "1,000 requests/minute",
      "All execution modes",
      "2 hour TTL",
      "Snapshots (100 max)",
      "1 deployable service",
      "Priority support",
    ],
    cta: "Start Trial",
    ctaHref: "/console",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale deployments",
    features: [
      "Unlimited containers",
      "Unlimited requests",
      "All execution modes",
      "Custom TTL",
      "Unlimited snapshots",
      "Unlimited services",
      "Custom domains",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    q: "What counts as a container?",
    a: "Each code execution, session, or service runs in its own isolated container. Concurrent containers are those running at the same time.",
  },
  {
    q: "What happens when my container TTL expires?",
    a: "The container is automatically terminated. For sessions, you can snapshot the state before expiration to preserve your work.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes, you can change plans at any time. Upgrades take effect immediately, downgrades at the next billing cycle.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes, annual billing gives you 2 months free. Contact us for annual pricing.",
  },
  {
    q: "What languages are supported?",
    a: "We support 42+ languages including Python, JavaScript, TypeScript, Go, Rust, Java, C++, Ruby, PHP, and more.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Simple, transparent pricing</h1>
            <p className={styles.subtitle}>
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>
        </section>

        <section className={styles.plans}>
          <div className={styles.container}>
            <div className={styles.planGrid}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`}
                >
                  {plan.popular && (
                    <div className={styles.popularBadge}>Most Popular</div>
                  )}
                  <div className={styles.planHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.planPrice}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.period}>{plan.period}</span>
                    </div>
                    <p className={styles.planDesc}>{plan.description}</p>
                    {"specs" in plan && plan.specs && (
                      <p className={styles.planSpecs}>{plan.specs}</p>
                    )}
                    {"savings" in plan && plan.savings && (
                      <p className={styles.savingsBadge}>{plan.savings}</p>
                    )}
                  </div>
                  <ul className={styles.features}>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaHref}
                    className={`${styles.planCta} ${plan.popular ? styles.primaryCta : ""}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.comparison}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Feature Comparison</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Free</th>
                    <th>Development</th>
                    <th>Production</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Execute Mode</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>Sessions Mode</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>Services Mode</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>Snapshots</td>
                    <td className={styles.dash}>—</td>
                    <td>10</td>
                    <td>100</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Zero-Trust Network</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>Semi-Trusted Network</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>Custom Domains</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                  <tr>
                    <td>SLA</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.dash}>—</td>
                    <td className={styles.check}>✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <h2>Ready to get started?</h2>
              <p>Create a free account and run your first container in seconds.</p>
              <div className={styles.ctaButtons}>
                <Link href="/console" className={styles.ctaPrimary}>
                  Get Free API Key
                </Link>
                <Link href="/docs" className={styles.ctaSecondary}>
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

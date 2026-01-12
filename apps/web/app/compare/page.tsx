"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./compare.module.css";

type FeatureValue = "yes" | "no" | "partial" | string;

interface Feature {
  name: string;
  exe: FeatureValue;
  unsandbox: FeatureValue;
  sprites: FeatureValue;
}

interface FeatureGroup {
  category: string;
  features: Feature[];
}

const featureGroups: FeatureGroup[] = [
  {
    category: "Core Product",
    features: [
      { name: "Primary product category", exe: "VM hosting (persistent VMs with disk)", unsandbox: "Remote code execution API", sprites: "Stateful sandbox environments + API" },
      { name: "Execution model", exe: "Persistent VM with OS access", unsandbox: "Containers spun up per request/session", sprites: "Persistent Linux sandbox \"Sprite\"" },
      { name: "Persistence of environment", exe: "yes", unsandbox: "partial", sprites: "yes" },
    ],
  },
  {
    category: "API & Management",
    features: [
      { name: "REST API support for management", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Interactive sessions (CLI/SSH/shell)", exe: "yes", unsandbox: "yes", sprites: "yes" },
      { name: "Deploy persistent services/apps", exe: "yes", unsandbox: "yes", sprites: "yes" },
      { name: "One-shot code execution (API)", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Web console/dashboard", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "CLI tooling", exe: "yes", unsandbox: "yes", sprites: "yes" },
    ],
  },
  {
    category: "Features & Capabilities",
    features: [
      { name: "Snapshots / checkpointing", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Network policy controls", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Async job & cancellation", exe: "no", unsandbox: "yes", sprites: "partial" },
      { name: "Multi-language support built-in", exe: "no", unsandbox: "42+ languages", sprites: "User installs" },
      { name: "Custom domain support", exe: "yes", unsandbox: "yes", sprites: "yes" },
      { name: "Snapshot / rollback to prior state", exe: "VM tools only", unsandbox: "yes", sprites: "yes" },
    ],
  },
  {
    category: "Security & Isolation",
    features: [
      { name: "Zero-trust sandboxing / isolation modes", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Scale to zero / idle billing", exe: "no", unsandbox: "yes", sprites: "yes" },
      { name: "Security model emphasis", exe: "Full VM with SSH access", unsandbox: "API-level sandboxing isolation", sprites: "Hybrid VM-like sandbox with API controls" },
    ],
  },
  {
    category: "Pricing & Business",
    features: [
      { name: "Billing model", exe: "Subscription (VM existing)", unsandbox: "Tiered API usage & concurrency", sprites: "Scale-to-zero usage billing" },
      { name: "Target use cases", exe: "Full environment servers", unsandbox: "LLM agents, remote code exec", sprites: "Sandbox environments, agents" },
    ],
  },
];

const products = [
  { id: "exe", name: "exe.dev", tagline: "Your own Linux box", color: "#6B7280" },
  { id: "unsandbox", name: "unsandbox", tagline: "Code Execution API for AI Agents", color: "#C0B55F", highlight: true },
  { id: "sprites", name: "Sprites.dev", tagline: "Stateful sandboxes by Fly.io", color: "#8B5CF6" },
];

export default function ComparePage() {
  const renderValue = (value: FeatureValue) => {
    if (value === "yes") return <span className={styles.checkYes}>✓</span>;
    if (value === "no") return <span className={styles.checkNo}>✗</span>;
    if (value === "partial") return <span className={styles.checkPartial}>◐</span>;
    return <span className={styles.checkText}>{value}</span>;
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              exe.dev vs <span className={styles.highlight}>unsandbox</span> vs Sprites.dev
            </h1>
            <p className={styles.subtitle}>
              Feature Comparison Table
            </p>
          </div>
        </section>

        {/* Big Comparison Table */}
        <section className={styles.tableSection}>
          <div className={styles.container}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.featureCol}>Feature / Capability</th>
                    {products.map((p) => (
                      <th
                        key={p.id}
                        className={p.highlight ? styles.highlightCol : ""}
                      >
                        <div className={styles.productHeader}>
                          <span className={styles.productName}>{p.name}</span>
                          <span className={styles.productTagline}>{p.tagline}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureGroups.map((group) => (
                    <>
                      <tr key={group.category} className={styles.categoryRow}>
                        <td colSpan={4} className={styles.categoryCell}>
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((feature, i) => (
                        <tr key={`${group.category}-${i}`}>
                          <td className={styles.featureCell}>{feature.name}</td>
                          <td>{renderValue(feature.exe)}</td>
                          <td className={styles.highlightCol}>{renderValue(feature.unsandbox)}</td>
                          <td>{renderValue(feature.sprites)}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.legend}>
              <span><span className={styles.checkYes}>✓</span> Supported</span>
              <span><span className={styles.checkPartial}>◐</span> Partial support</span>
              <span><span className={styles.checkNo}>✗</span> Not supported</span>
            </div>
          </div>
        </section>

        {/* Who Should Use What */}
        <section className={styles.whoSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Who Should Use What?</h2>
            <table className={styles.whoTable}>
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Best Fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>I want a full Linux machine with SSH & disk</td>
                  <td><span className={styles.winner} style={{ borderColor: "#6B7280" }}>exe.dev</span></td>
                </tr>
                <tr>
                  <td>I want an on-demand API to compile/run code securely</td>
                  <td><span className={styles.winner} style={{ borderColor: "#C0B55F" }}>unsandbox</span></td>
                </tr>
                <tr>
                  <td>I want persistent sandboxes managed via API with snapshots</td>
                  <td><span className={styles.winner} style={{ borderColor: "#8B5CF6" }}>Sprites.dev</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* High-Level Summary */}
        <section className={styles.summarySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>High-Level Insight</h2>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <h3>exe.dev</h3>
                <p className={styles.summaryTagline}>Your own Linux box accessible over SSH/HTTP</p>
                <div className={styles.summaryPros}>
                  <span className={styles.checkYes}>✓</span> VM environment with persistent storage and HTTPS
                </div>
                <div className={styles.summaryCons}>
                  <span className={styles.checkNo}>✗</span> Not an API for remote code execution
                </div>
              </div>
              <div className={`${styles.summaryCard} ${styles.summaryHighlight}`}>
                <h3>unsandbox</h3>
                <p className={styles.summaryTagline}>Secure remote code execution platform and API</p>
                <div className={styles.summaryPros}>
                  <span className={styles.checkYes}>✓</span> Built-in language support, sessions, services, snapshots
                </div>
                <div className={styles.summaryPros}>
                  <span className={styles.checkYes}>✓</span> Strong API abstractions, network isolation, async jobs
                </div>
                <div className={styles.summaryCons}>
                  <span className={styles.checkNo}>✗</span> No full VM environment
                </div>
              </div>
              <div className={styles.summaryCard}>
                <h3>Sprites.dev</h3>
                <p className={styles.summaryTagline}>Hybrid sandbox + API: persistent VM-like environment</p>
                <div className={styles.summaryPros}>
                  <span className={styles.checkYes}>✓</span> Persistent sandboxed Linux environment with filesystem
                </div>
                <div className={styles.summaryPros}>
                  <span className={styles.checkYes}>✓</span> API for exec commands, checkpoints, network policy
                </div>
                <div className={styles.summaryCons}>
                  <span className={styles.checkPartial}>◐</span> More heavyweight than unsandbox containers
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

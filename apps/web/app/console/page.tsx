"use client";

import { Header } from "../components/Header";
import styles from "./console.module.css";
import { useState } from "react";
import Link from "next/link";

const mockSessions = [
  { id: "sess_abc123", language: "python:3.11", status: "running", created: "2 min ago" },
  { id: "sess_def456", language: "node:20", status: "frozen", created: "1 hour ago" },
  { id: "sess_ghi789", language: "rust:1.75", status: "running", created: "15 min ago" },
];

const mockServices = [
  { id: "svc_prod01", name: "api-server-prod", language: "python:3.11", status: "running", url: "api-server-prod.unsandbox.run", created: "2 days ago" },
  { id: "svc_dev01", name: "dev-sandbox", language: "node:20", status: "frozen", url: "dev-sandbox.unsandbox.run", created: "5 days ago" },
];

const mockSnapshots = [
  { id: "snap_001", name: "ml-environment", size: "2.4 GB", created: "1 day ago" },
  { id: "snap_002", name: "notebook-checkpoint", size: "890 MB", created: "3 days ago" },
  { id: "snap_003", name: "clean-python-env", size: "450 MB", created: "1 week ago" },
];

const mockApiKeys = [
  { id: "key_live_abc", name: "Production", prefix: "sk_live_...abc", created: "30 days ago", lastUsed: "2 min ago" },
  { id: "key_test_def", name: "Development", prefix: "sk_test_...def", created: "15 days ago", lastUsed: "1 hour ago" },
];

type Tab = "sessions" | "services" | "snapshots" | "apikeys";

export default function ConsolePage() {
  const [activeTab, setActiveTab] = useState<Tab>("sessions");

  return (
    <>
      <Header />
      <div className={styles.console}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.orgName}>My Workspace</span>
            <span className={styles.plan}>Developer</span>
          </div>

          <nav className={styles.sidebarNav}>
            <button
              className={`${styles.navItem} ${activeTab === "sessions" ? styles.active : ""}`}
              onClick={() => setActiveTab("sessions")}
            >
              <span className={styles.navIcon}>◉</span>
              Sessions
              <span className={styles.navBadge}>{mockSessions.length}</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === "services" ? styles.active : ""}`}
              onClick={() => setActiveTab("services")}
            >
              <span className={styles.navIcon}>◆</span>
              Services
              <span className={styles.navBadge}>{mockServices.length}</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === "snapshots" ? styles.active : ""}`}
              onClick={() => setActiveTab("snapshots")}
            >
              <span className={styles.navIcon}>◫</span>
              Snapshots
              <span className={styles.navBadge}>{mockSnapshots.length}</span>
            </button>
            <button
              className={`${styles.navItem} ${activeTab === "apikeys" ? styles.active : ""}`}
              onClick={() => setActiveTab("apikeys")}
            >
              <span className={styles.navIcon}>🔑</span>
              API Keys
              <span className={styles.navBadge}>{mockApiKeys.length}</span>
            </button>
          </nav>

          <div className={styles.sidebarFooter}>
            <div className={styles.usage}>
              <div className={styles.usageHeader}>
                <span>Usage</span>
                <span className={styles.usagePercent}>42%</span>
              </div>
              <div className={styles.usageBar}>
                <div className={styles.usageFill} style={{ width: "42%" }}></div>
              </div>
              <span className={styles.usageText}>2.1 / 5 containers</span>
            </div>
            <Link href="/pricing" className={styles.upgradeBtn}>
              Upgrade Plan
            </Link>
          </div>
        </aside>

        <main className={styles.main}>
          {activeTab === "sessions" && (
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <h1>Sessions</h1>
                <button className={styles.primaryBtn}>
                  <span>+</span> New Session
                </button>
              </div>

              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span>ID</span>
                  <span>Language</span>
                  <span>Status</span>
                  <span>Created</span>
                  <span>Actions</span>
                </div>
                {mockSessions.map((session) => (
                  <div key={session.id} className={styles.tableRow}>
                    <span className={styles.mono}>{session.id}</span>
                    <span className={styles.tag}>{session.language}</span>
                    <span className={`${styles.status} ${styles[session.status]}`}>
                      <span className={styles.statusDot}></span>
                      {session.status}
                    </span>
                    <span className={styles.muted}>{session.created}</span>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn}>Connect</button>
                      <button className={styles.actionBtn}>Snapshot</button>
                      <button className={styles.actionBtnDanger}>Terminate</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <h1>Services</h1>
                <button className={styles.primaryBtn}>
                  <span>+</span> Deploy Service
                </button>
              </div>

              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span>Name</span>
                  <span>Language</span>
                  <span>Status</span>
                  <span>URL</span>
                  <span>Actions</span>
                </div>
                {mockServices.map((service) => (
                  <div key={service.id} className={styles.tableRow}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.tag}>{service.language}</span>
                    <span className={`${styles.status} ${styles[service.status]}`}>
                      <span className={styles.statusDot}></span>
                      {service.status}
                    </span>
                    <a href={`https://${service.url}`} className={styles.link} target="_blank" rel="noopener">
                      {service.url}
                    </a>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn}>Logs</button>
                      {service.status === "frozen" ? (
                        <button className={styles.actionBtn}>Unfreeze</button>
                      ) : (
                        <button className={styles.actionBtn}>Freeze</button>
                      )}
                      <button className={styles.actionBtnDanger}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "snapshots" && (
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <h1>Snapshots</h1>
              </div>

              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span>Name</span>
                  <span>ID</span>
                  <span>Size</span>
                  <span>Created</span>
                  <span>Actions</span>
                </div>
                {mockSnapshots.map((snapshot) => (
                  <div key={snapshot.id} className={styles.tableRow}>
                    <span className={styles.snapshotName}>{snapshot.name}</span>
                    <span className={styles.mono}>{snapshot.id}</span>
                    <span className={styles.muted}>{snapshot.size}</span>
                    <span className={styles.muted}>{snapshot.created}</span>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn}>Restore</button>
                      <button className={styles.actionBtn}>Clone</button>
                      <button className={styles.actionBtnDanger}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "apikeys" && (
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <h1>API Keys</h1>
                <button className={styles.primaryBtn}>
                  <span>+</span> Create Key
                </button>
              </div>

              <div className={styles.warning}>
                <strong>Security:</strong> API keys grant full access to your account.
                Keep them secret and never expose them in client-side code.
              </div>

              <div className={styles.table}>
                <div className={styles.tableHeader}>
                  <span>Name</span>
                  <span>Key</span>
                  <span>Created</span>
                  <span>Last Used</span>
                  <span>Actions</span>
                </div>
                {mockApiKeys.map((key) => (
                  <div key={key.id} className={styles.tableRow}>
                    <span>{key.name}</span>
                    <span className={styles.mono}>{key.prefix}</span>
                    <span className={styles.muted}>{key.created}</span>
                    <span className={styles.muted}>{key.lastUsed}</span>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn}>Copy</button>
                      <button className={styles.actionBtnDanger}>Revoke</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

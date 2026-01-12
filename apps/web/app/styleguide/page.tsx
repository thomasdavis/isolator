"use client";

import { Header } from "../components/Header";
import styles from "./styleguide.module.css";
import { useState } from "react";

const colors = [
  { name: "bg", var: "--color-bg", hex: "#191A19", desc: "Background" },
  { name: "surface", var: "--color-surface", hex: "#1D2920", desc: "Cards, panels" },
  { name: "surface-2", var: "--color-surface-2", hex: "#3F4538", desc: "Elevated surfaces" },
  { name: "surface-3", var: "--color-surface-3", hex: "#4D5944", desc: "Highest elevation" },
  { name: "border", var: "--color-border", hex: "#2A332B", desc: "Default borders" },
  { name: "border-strong", var: "--color-border-strong", hex: "#3F4538", desc: "Emphasized borders" },
  { name: "text", var: "--color-text", hex: "#D2D3CF", desc: "Primary text" },
  { name: "text-muted", var: "--color-text-muted", hex: "#A8A9A8", desc: "Secondary text" },
  { name: "accent", var: "--color-accent", hex: "#C0B55F", desc: "Brand accent" },
  { name: "accent-strong", var: "--color-accent-strong", hex: "#BDB15D", desc: "Hover accent" },
  { name: "success", var: "--color-success", hex: "#6FBF8A", desc: "Success states" },
  { name: "warning", var: "--color-warning", hex: "#D8B25A", desc: "Warning states" },
  { name: "danger", var: "--color-danger", hex: "#D06C6C", desc: "Error states" },
];

const spacing = [
  { name: "space-1", value: "2px" },
  { name: "space-2", value: "4px" },
  { name: "space-3", value: "8px" },
  { name: "space-4", value: "12px" },
  { name: "space-5", value: "16px" },
  { name: "space-6", value: "24px" },
  { name: "space-7", value: "32px" },
  { name: "space-8", value: "48px" },
  { name: "space-9", value: "64px" },
];

const radii = [
  { name: "radius-1", value: "2px" },
  { name: "radius-2", value: "4px" },
  { name: "radius-3", value: "6px" },
  { name: "radius-4", value: "10px" },
  { name: "radius-full", value: "9999px" },
];

export default function StyleguidePage() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("option1");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <>
      <Header />
      <div className={styles.styleguide}>
        <div className={styles.container}>
          {/* Hero */}
          <section className={styles.hero}>
            <h1 className={styles.title}>Design System</h1>
            <p className={styles.subtitle}>
              unsandbox terminal/phosphor theme — components, tokens, and patterns
            </p>
          </section>

          {/* Colors */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Colors</h2>
            <p className={styles.sectionDesc}>
              The color palette is inspired by phosphor terminal displays with olive green tones and gold accents.
            </p>
            <div className={styles.colorGrid}>
              {colors.map((color) => (
                <div key={color.name} className={styles.colorCard}>
                  <div
                    className={styles.colorSwatch}
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className={styles.colorInfo}>
                    <span className={styles.colorName}>{color.name}</span>
                    <span className={styles.colorHex}>{color.hex}</span>
                    <span className={styles.colorDesc}>{color.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Typography</h2>
            <p className={styles.sectionDesc}>
              JetBrains Mono is used throughout for a consistent terminal aesthetic.
            </p>

            <div className={styles.typeShowcase}>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Display / 42px</span>
                <h1 style={{ fontSize: "42px", margin: 0 }}>Code Execution API</h1>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H1 / 28px</span>
                <h2 style={{ fontSize: "28px", margin: 0 }}>Section Heading</h2>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H2 / 22px</span>
                <h3 style={{ fontSize: "22px", margin: 0 }}>Subsection Title</h3>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H3 / 18px</span>
                <h4 style={{ fontSize: "18px", margin: 0 }}>Card Heading</h4>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Body / 15px</span>
                <p style={{ fontSize: "15px", margin: 0 }}>Execute code in 42+ languages via a simple REST API. Interactive sessions, persistent services with HTTPS, snapshots, and async job polling.</p>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Small / 13px</span>
                <p style={{ fontSize: "13px", margin: 0, color: "var(--color-text-muted)" }}>Secondary text for descriptions, captions, and metadata.</p>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Micro / 11px</span>
                <p style={{ fontSize: "11px", margin: 0, color: "var(--color-text-muted)" }}>Labels, badges, and fine print.</p>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Font Weights</h3>
            <div className={styles.weightShowcase}>
              <span style={{ fontWeight: 400 }}>Regular (400)</span>
              <span style={{ fontWeight: 500 }}>Medium (500)</span>
              <span style={{ fontWeight: 600 }}>Semibold (600)</span>
              <span style={{ fontWeight: 700 }}>Bold (700)</span>
            </div>
          </section>

          {/* Spacing */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Spacing</h2>
            <p className={styles.sectionDesc}>
              8pt grid system for consistent spacing throughout the interface.
            </p>
            <div className={styles.spacingGrid}>
              {spacing.map((space) => (
                <div key={space.name} className={styles.spacingItem}>
                  <div
                    className={styles.spacingBar}
                    style={{ width: space.value }}
                  />
                  <span className={styles.spacingName}>{space.name}</span>
                  <span className={styles.spacingValue}>{space.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Border Radius</h2>
            <div className={styles.radiusGrid}>
              {radii.map((radius) => (
                <div key={radius.name} className={styles.radiusItem}>
                  <div
                    className={styles.radiusBox}
                    style={{ borderRadius: radius.value }}
                  />
                  <span className={styles.radiusName}>{radius.name}</span>
                  <span className={styles.radiusValue}>{radius.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Buttons */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Buttons</h2>

            <h3 className={styles.subsectionTitle}>Primary Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnPrimary}>Primary Button</button>
              <button className={styles.btnPrimary} disabled>Disabled</button>
              <button className={`${styles.btnPrimary} ${styles.btnSm}`}>Small</button>
              <button className={`${styles.btnPrimary} ${styles.btnLg}`}>Large Button</button>
            </div>

            <h3 className={styles.subsectionTitle}>Secondary Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnSecondary}>Secondary Button</button>
              <button className={styles.btnSecondary} disabled>Disabled</button>
              <button className={`${styles.btnSecondary} ${styles.btnSm}`}>Small</button>
              <button className={`${styles.btnSecondary} ${styles.btnLg}`}>Large Button</button>
            </div>

            <h3 className={styles.subsectionTitle}>Ghost Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnGhost}>Ghost Button</button>
              <button className={styles.btnGhost} disabled>Disabled</button>
              <button className={`${styles.btnGhost} ${styles.btnSm}`}>Small</button>
            </div>

            <h3 className={styles.subsectionTitle}>Danger Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnDanger}>Delete</button>
              <button className={styles.btnDanger} disabled>Disabled</button>
            </div>

            <h3 className={styles.subsectionTitle}>Icon Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnIcon}>▶</button>
              <button className={styles.btnIcon}>✕</button>
              <button className={styles.btnIcon}>⚙</button>
              <button className={styles.btnIcon}>✨</button>
              <button className={`${styles.btnIcon} ${styles.btnIconLg}`}>▶</button>
            </div>

            <h3 className={styles.subsectionTitle}>Button with Icons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnPrimary}>
                <span>▶</span> Run Code
              </button>
              <button className={styles.btnSecondary}>
                <span>✨</span> Generate
              </button>
              <button className={styles.btnGhost}>
                <span>⚙</span> Settings
              </button>
            </div>
          </section>

          {/* Form Elements */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Form Elements</h2>

            <h3 className={styles.subsectionTitle}>Text Inputs</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Default Input</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Disabled Input</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Disabled..."
                  disabled
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>With Error</label>
                <input
                  type="text"
                  className={`${styles.input} ${styles.inputError}`}
                  placeholder="Invalid input..."
                />
                <span className={styles.errorText}>This field is required</span>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Select</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Language</label>
                <select
                  className={styles.select}
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Disabled Select</label>
                <select className={styles.select} disabled>
                  <option>Disabled option</option>
                </select>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Textarea</h3>
            <div className={styles.formGroup} style={{ maxWidth: "500px" }}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter description..."
                rows={4}
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>

            <h3 className={styles.subsectionTitle}>Checkboxes & Toggles</h3>
            <div className={styles.checkboxRow}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={checkboxValue}
                  onChange={(e) => setCheckboxValue(e.target.checked)}
                />
                <span>Default checkbox</span>
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" checked readOnly />
                <span>Checked</span>
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" disabled />
                <span>Disabled</span>
              </label>
            </div>
          </section>

          {/* Cards & Surfaces */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cards & Surfaces</h2>

            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h4 className={styles.cardTitle}>Default Card</h4>
                <p className={styles.cardDesc}>Basic card with surface background and border.</p>
              </div>
              <div className={`${styles.card} ${styles.cardElevated}`}>
                <h4 className={styles.cardTitle}>Elevated Card</h4>
                <p className={styles.cardDesc}>Higher elevation with surface-2 background.</p>
              </div>
              <div className={`${styles.card} ${styles.cardAccent}`}>
                <h4 className={styles.cardTitle}>Accent Card</h4>
                <p className={styles.cardDesc}>Card with accent border and glow effect.</p>
              </div>
              <div className={`${styles.card} ${styles.cardInteractive}`}>
                <h4 className={styles.cardTitle}>Interactive Card</h4>
                <p className={styles.cardDesc}>Hover to see the interactive state.</p>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Badges & Tags</h2>

            <h3 className={styles.subsectionTitle}>Status Badges</h3>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>Default</span>
              <span className={`${styles.badge} ${styles.badgeAccent}`}>Accent</span>
              <span className={`${styles.badge} ${styles.badgeSuccess}`}>Success</span>
              <span className={`${styles.badge} ${styles.badgeWarning}`}>Warning</span>
              <span className={`${styles.badge} ${styles.badgeDanger}`}>Danger</span>
            </div>

            <h3 className={styles.subsectionTitle}>Pill Badges</h3>
            <div className={styles.badgeRow}>
              <span className={`${styles.badge} ${styles.badgePill}`}>python</span>
              <span className={`${styles.badge} ${styles.badgePill}`}>javascript</span>
              <span className={`${styles.badge} ${styles.badgePill}`}>go</span>
              <span className={`${styles.badge} ${styles.badgePill}`}>rust</span>
            </div>

            <h3 className={styles.subsectionTitle}>Status Indicators</h3>
            <div className={styles.statusRow}>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.statusOnline}`}></span>
                <span>Online</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.statusPending}`}></span>
                <span>Pending</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.statusOffline}`}></span>
                <span>Offline</span>
              </div>
            </div>
          </section>

          {/* Code Blocks */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Code</h2>

            <h3 className={styles.subsectionTitle}>Inline Code</h3>
            <p>
              Use <code>print(&quot;Hello&quot;)</code> to output text or <code>console.log()</code> in JavaScript.
            </p>

            <h3 className={styles.subsectionTitle}>Code Block</h3>
            <pre className={styles.codeBlock}>
              <code>{`def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`}</code>
            </pre>
          </section>

          {/* Alerts */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Alerts & Messages</h2>

            <div className={styles.alertStack}>
              <div className={styles.alert}>
                <span className={styles.alertIcon}>ℹ</span>
                <div>
                  <strong>Info:</strong> This is an informational message.
                </div>
              </div>
              <div className={`${styles.alert} ${styles.alertSuccess}`}>
                <span className={styles.alertIcon}>✓</span>
                <div>
                  <strong>Success:</strong> Your code executed successfully in 23ms.
                </div>
              </div>
              <div className={`${styles.alert} ${styles.alertWarning}`}>
                <span className={styles.alertIcon}>⚠</span>
                <div>
                  <strong>Warning:</strong> Your session will expire in 5 minutes.
                </div>
              </div>
              <div className={`${styles.alert} ${styles.alertDanger}`}>
                <span className={styles.alertIcon}>✕</span>
                <div>
                  <strong>Error:</strong> Compilation failed with 3 errors.
                </div>
              </div>
            </div>
          </section>

          {/* Loading States */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Loading States</h2>

            <div className={styles.loadingRow}>
              <div className={styles.loadingItem}>
                <div className={styles.spinner}></div>
                <span>Spinner</span>
              </div>
              <div className={styles.loadingItem}>
                <div className={styles.pulse}></div>
                <span>Pulse</span>
              </div>
              <div className={styles.loadingItem}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>Dots</span>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Skeleton Loading</h3>
            <div className={styles.skeletonCard}>
              <div className={`${styles.skeleton} ${styles.skeletonTitle}`}></div>
              <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
              <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: "70%" }}></div>
            </div>
          </section>

          {/* Shadows */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Shadows & Effects</h2>

            <div className={styles.shadowGrid}>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-sm)" }}>
                <span>shadow-sm</span>
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-md)" }}>
                <span>shadow-md</span>
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-lg)" }}>
                <span>shadow-lg</span>
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-glow)" }}>
                <span>shadow-glow</span>
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-glow-strong)" }}>
                <span>shadow-glow-strong</span>
              </div>
            </div>
          </section>

          {/* Icons */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Icons & Emoji</h2>
            <p className={styles.sectionDesc}>
              Using emoji and Unicode symbols for a lightweight icon system.
            </p>

            <div className={styles.iconGrid}>
              <div className={styles.iconItem}><span>▶</span><span>Play</span></div>
              <div className={styles.iconItem}><span>⏹</span><span>Stop</span></div>
              <div className={styles.iconItem}><span>✓</span><span>Check</span></div>
              <div className={styles.iconItem}><span>✕</span><span>Close</span></div>
              <div className={styles.iconItem}><span>⚙</span><span>Settings</span></div>
              <div className={styles.iconItem}><span>✨</span><span>AI/Magic</span></div>
              <div className={styles.iconItem}><span>🐍</span><span>Python</span></div>
              <div className={styles.iconItem}><span>⚡</span><span>JavaScript</span></div>
              <div className={styles.iconItem}><span>🦀</span><span>Rust</span></div>
              <div className={styles.iconItem}><span>🔵</span><span>Go</span></div>
              <div className={styles.iconItem}><span>📘</span><span>TypeScript</span></div>
              <div className={styles.iconItem}><span>💎</span><span>Ruby</span></div>
              <div className={styles.iconItem}><span>☕</span><span>Java</span></div>
              <div className={styles.iconItem}><span>📁</span><span>Files</span></div>
              <div className={styles.iconItem}><span>🔒</span><span>Security</span></div>
              <div className={styles.iconItem}><span>⏱</span><span>Time</span></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

"use client";

import { Header } from "../components/Header";
import styles from "./styleguide.module.css";
import { useState } from "react";

// Simple imports - known to work
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Badge } from "@repo/ui/badge";
import { Code } from "@repo/ui/code";
import { Separator } from "@repo/ui/separator";
import { Toggle } from "@repo/ui/toggle";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@repo/ui/card";

// Compound imports
import { Checkbox } from "@repo/ui/checkbox";
import { Radio, RadioGroup } from "@repo/ui/radio";
import { Switch } from "@repo/ui/switch";
import { ToggleGroup } from "@repo/ui/toggle-group";
import { Select } from "@repo/ui/select";
import { Dialog } from "@repo/ui/dialog";
import { Popover } from "@repo/ui/popover";
import { Tooltip } from "@repo/ui/tooltip";
import { Menu } from "@repo/ui/menu";
import { Tabs } from "@repo/ui/tabs";
import { Accordion } from "@repo/ui/accordion";
import { Progress } from "@repo/ui/progress";
import { Meter } from "@repo/ui/meter";
import { Avatar } from "@repo/ui/avatar";
import { Slider } from "@repo/ui/slider";
import { NumberField } from "@repo/ui/number-field";

const colors = [
  { name: "bg", hex: "#191A19", desc: "Background" },
  { name: "surface", hex: "#1D2920", desc: "Cards, panels" },
  { name: "surface-2", hex: "#3F4538", desc: "Elevated surfaces" },
  { name: "surface-3", hex: "#4D5944", desc: "Highest elevation" },
  { name: "border", hex: "#2A332B", desc: "Default borders" },
  { name: "border-strong", hex: "#3F4538", desc: "Emphasized borders" },
  { name: "text", hex: "#D2D3CF", desc: "Primary text" },
  { name: "text-muted", hex: "#A8A9A8", desc: "Secondary text" },
  { name: "accent", hex: "#C0B55F", desc: "Brand accent" },
  { name: "accent-strong", hex: "#BDB15D", desc: "Hover accent" },
  { name: "success", hex: "#6FBF8A", desc: "Success states" },
  { name: "warning", hex: "#D8B25A", desc: "Warning states" },
  { name: "danger", hex: "#D06C6C", desc: "Error states" },
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

const languageOptions = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
];

const quicksortCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`;

export default function StyleguidePage() {
  const [togglePressed, setTogglePressed] = useState(false);
  const [alignment, setAlignment] = useState<readonly string[]>(["left"]);
  const [sliderValue, setSliderValue] = useState(50);
  const [numberValue, setNumberValue] = useState(42);

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
              Phosphor terminal-inspired palette with olive greens and gold accents.
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
              JetBrains Mono for the terminal aesthetic. Clean, readable, technical.
            </p>
            <div className={styles.typeShowcase}>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Display / 42px</span>
                <span style={{ fontSize: "42px", fontWeight: 700 }}>Code Execution</span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H1 / 28px</span>
                <span style={{ fontSize: "28px", fontWeight: 700 }}>Code Execution API</span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H2 / 22px</span>
                <span style={{ fontSize: "22px", fontWeight: 600 }}>Section Heading</span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>H3 / 18px</span>
                <span style={{ fontSize: "18px", fontWeight: 600 }}>Subsection Title</span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Body / 15px</span>
                <span style={{ fontSize: "15px" }}>
                  Execute code in any language with millisecond latency.
                </span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Small / 13px</span>
                <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                  Secure sandboxed environments with full isolation.
                </span>
              </div>
              <div className={styles.typeItem}>
                <span className={styles.typeLabel}>Micro / 11px</span>
                <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
                  LABELS, BADGES, FINE PRINT
                </span>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Font Weights</h3>
            <div className={styles.weightShowcase}>
              <span style={{ fontWeight: 400 }}>Regular</span>
              <span style={{ fontWeight: 500 }}>Medium</span>
              <span style={{ fontWeight: 600 }}>Semibold</span>
              <span style={{ fontWeight: 700 }}>Bold</span>
            </div>
          </section>

          {/* Spacing */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Spacing</h2>
            <p className={styles.sectionDesc}>8-point grid system for consistent layouts.</p>
            <div className={styles.spacingGrid}>
              {spacing.map((s) => (
                <div key={s.name} className={styles.spacingItem}>
                  <span className={styles.spacingName}>{s.name}</span>
                  <div
                    className={styles.spacingBar}
                    style={{ width: s.value }}
                  />
                  <span className={styles.spacingValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Border Radius</h2>
            <p className={styles.sectionDesc}>Sharp to rounded for different contexts.</p>
            <div className={styles.radiusGrid}>
              {radii.map((r) => (
                <div key={r.name} className={styles.radiusItem}>
                  <div
                    className={styles.radiusBox}
                    style={{ borderRadius: r.value }}
                  />
                  <span className={styles.radiusName}>{r.name}</span>
                  <span className={styles.radiusValue}>{r.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Buttons */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Buttons</h2>
            <p className={styles.sectionDesc}>
              Action triggers with clear hierarchy.
            </p>

            <h3 className={styles.subsectionTitle}>Primary Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnPrimary}>Primary</button>
              <button className={styles.btnPrimary} disabled>Disabled</button>
              <button className={`${styles.btnPrimary} ${styles.btnSm}`}>Small</button>
              <button className={`${styles.btnPrimary} ${styles.btnLg}`}>Large</button>
            </div>

            <h3 className={styles.subsectionTitle}>Secondary Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnSecondary}>Secondary</button>
              <button className={styles.btnSecondary} disabled>Disabled</button>
              <button className={`${styles.btnSecondary} ${styles.btnSm}`}>Small</button>
              <button className={`${styles.btnSecondary} ${styles.btnLg}`}>Large</button>
            </div>

            <h3 className={styles.subsectionTitle}>Ghost Buttons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnGhost}>Ghost</button>
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
              <button className={`${styles.btnIcon} ${styles.btnIconLg}`}>✨</button>
            </div>

            <h3 className={styles.subsectionTitle}>Buttons with Icons</h3>
            <div className={styles.buttonRow}>
              <button className={styles.btnPrimary}>▶ Run Code</button>
              <button className={styles.btnSecondary}>✨ Generate</button>
              <button className={styles.btnGhost}>⚙ Settings</button>
            </div>
          </section>

          {/* Form Elements */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Form Elements</h2>
            <p className={styles.sectionDesc}>
              Input controls styled for the terminal aesthetic.
            </p>

            <h3 className={styles.subsectionTitle}>Text Inputs</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Default Input</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter text..."
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Disabled Input</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Disabled"
                  disabled
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Error State</label>
                <input
                  type="text"
                  className={`${styles.input} ${styles.inputError}`}
                  defaultValue="Invalid value"
                />
                <span className={styles.errorText}>This field is required</span>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Select</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Language</label>
                <select className={styles.select}>
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>TypeScript</option>
                  <option>Go</option>
                  <option>Rust</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Disabled Select</label>
                <select className={styles.select} disabled>
                  <option>Python</option>
                </select>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Textarea</h3>
            <div className={styles.formGroup} style={{ maxWidth: "500px" }}>
              <label className={styles.label}>Description</label>
              <textarea
                className={styles.textarea}
                placeholder="Enter a description..."
              />
            </div>

            <h3 className={styles.subsectionTitle}>Checkboxes &amp; Toggles</h3>
            <div className={styles.checkboxRow}>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span>Default</span>
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" defaultChecked />
                <span>Checked</span>
              </label>
              <label className={styles.checkbox}>
                <input type="checkbox" disabled />
                <span>Disabled</span>
              </label>
            </div>
          </section>

          {/* Cards */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cards &amp; Surfaces</h2>
            <p className={styles.sectionDesc}>
              Container components for grouping content.
            </p>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Default Card</div>
                <div className={styles.cardDesc}>
                  Basic card with surface background and border.
                </div>
              </div>
              <div className={`${styles.card} ${styles.cardElevated}`}>
                <div className={styles.cardTitle}>Elevated Card</div>
                <div className={styles.cardDesc}>
                  Higher elevation with surface-2 background.
                </div>
              </div>
              <div className={`${styles.card} ${styles.cardAccent}`}>
                <div className={styles.cardTitle}>Accent Card</div>
                <div className={styles.cardDesc}>
                  Card with accent border and glow effect.
                </div>
              </div>
              <div className={`${styles.card} ${styles.cardInteractive}`}>
                <div className={styles.cardTitle}>Interactive Card</div>
                <div className={styles.cardDesc}>
                  Hover to see the interactive state.
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Badges &amp; Tags</h2>
            <p className={styles.sectionDesc}>
              Labels and status indicators.
            </p>

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
                <span className={`${styles.statusDot} ${styles.statusOnline}`} />
                <span>Online</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.statusPending}`} />
                <span>Pending</span>
              </div>
              <div className={styles.statusItem}>
                <span className={`${styles.statusDot} ${styles.statusOffline}`} />
                <span>Offline</span>
              </div>
            </div>
          </section>

          {/* Code */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Code</h2>
            <p className={styles.sectionDesc}>
              Inline and block code display.
            </p>

            <h3 className={styles.subsectionTitle}>Inline Code</h3>
            <p style={{ color: "var(--color-text)", fontSize: "var(--font-size-body)" }}>
              Use <Code>print(&quot;Hello&quot;)</Code> in Python or{" "}
              <Code>console.log()</Code> in JavaScript.
            </p>

            <h3 className={styles.subsectionTitle}>Code Block</h3>
            <div className={styles.codeBlock}>
              <code>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{quicksortCode}</pre>
              </code>
            </div>
          </section>

          {/* Alerts */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Alerts &amp; Messages</h2>
            <p className={styles.sectionDesc}>
              Feedback messages for different contexts.
            </p>
            <div className={styles.alertStack}>
              <div className={styles.alert}>
                <span className={styles.alertIcon}>ℹ</span>
                <span>This is an informational message.</span>
              </div>
              <div className={`${styles.alert} ${styles.alertSuccess}`}>
                <span className={styles.alertIcon}>✓</span>
                <span>Your code executed successfully in 23ms.</span>
              </div>
              <div className={`${styles.alert} ${styles.alertWarning}`}>
                <span className={styles.alertIcon}>⚠</span>
                <span>Your session will expire in 5 minutes.</span>
              </div>
              <div className={`${styles.alert} ${styles.alertDanger}`}>
                <span className={styles.alertIcon}>✕</span>
                <span>Compilation failed with 3 errors.</span>
              </div>
            </div>
          </section>

          {/* Loading States */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Loading States</h2>
            <p className={styles.sectionDesc}>
              Visual feedback during async operations.
            </p>
            <div className={styles.loadingRow}>
              <div className={styles.loadingItem}>
                <div className={styles.spinner} />
                <span>Spinner</span>
              </div>
              <div className={styles.loadingItem}>
                <div className={styles.pulse} />
                <span>Pulse</span>
              </div>
              <div className={styles.loadingItem}>
                <div className={styles.dots}>
                  <span /><span /><span />
                </div>
                <span>Dots</span>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Skeleton Loading</h3>
            <div className={styles.skeletonCard}>
              <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
              <div className={`${styles.skeleton} ${styles.skeletonText}`} />
              <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: "80%" }} />
            </div>
          </section>

          {/* Shadows */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Shadows &amp; Effects</h2>
            <p className={styles.sectionDesc}>
              Elevation and glow effects.
            </p>
            <div className={styles.shadowGrid}>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-sm)" }}>
                shadow-sm
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-md)" }}>
                shadow-md
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-lg)" }}>
                shadow-lg
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-glow)" }}>
                shadow-glow
              </div>
              <div className={styles.shadowItem} style={{ boxShadow: "var(--shadow-glow-strong)" }}>
                glow-strong
              </div>
            </div>
          </section>

          {/* Icons */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Icons &amp; Emoji</h2>
            <p className={styles.sectionDesc}>
              Lightweight Unicode-based icons for common actions.
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
              <div className={styles.iconItem}><span>📁</span><span>Files</span></div>
              <div className={styles.iconItem}><span>🔒</span><span>Security</span></div>
            </div>
          </section>

          <Separator />

          {/* Base UI Components */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Base UI Components</h2>
            <p className={styles.sectionDesc}>
              Interactive components built with Base UI and styled for the design system.
            </p>
          </section>

          {/* Button Component */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Button (Base UI)</h2>
            <div className={styles.componentRow}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </section>

          <Separator />

          {/* Input Component */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Input (Base UI)</h2>
            <Input placeholder="Enter text..." />
          </section>

          <Separator />

          {/* Checkbox */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Checkbox</h2>
            <div className={styles.componentRow}>
              <label className={styles.checkboxLabel}>
                <Checkbox.Root><Checkbox.Indicator /></Checkbox.Root>
                <span>Option</span>
              </label>
            </div>
          </section>

          <Separator />

          {/* Radio */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Radio</h2>
            <RadioGroup.Root defaultValue="a">
              <label className={styles.checkboxLabel}>
                <Radio.Root value="a"><Radio.Indicator /></Radio.Root>
                <span>Option A</span>
              </label>
              <label className={styles.checkboxLabel}>
                <Radio.Root value="b"><Radio.Indicator /></Radio.Root>
                <span>Option B</span>
              </label>
            </RadioGroup.Root>
          </section>

          <Separator />

          {/* Switch */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Switch</h2>
            <label className={styles.checkboxLabel}>
              <Switch.Root><Switch.Thumb /></Switch.Root>
              <span>Toggle</span>
            </label>
          </section>

          <Separator />

          {/* Toggle */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Toggle</h2>
            <Toggle pressed={togglePressed} onPressedChange={setTogglePressed}>
              {togglePressed ? "On" : "Off"}
            </Toggle>
          </section>

          <Separator />

          {/* Toggle Group */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Toggle Group</h2>
            <ToggleGroup.Root value={alignment} onValueChange={setAlignment}>
              <ToggleGroup.Item value="left">L</ToggleGroup.Item>
              <ToggleGroup.Item value="center">C</ToggleGroup.Item>
              <ToggleGroup.Item value="right">R</ToggleGroup.Item>
            </ToggleGroup.Root>
          </section>

          <Separator />

          {/* Select */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Select (Base UI)</h2>
            <div style={{ maxWidth: "200px" }}>
              <Select.Root defaultValue="python">
                <Select.Trigger>
                  <Select.Value />
                  <Select.Icon />
                </Select.Trigger>
                <Select.Portal>
                  <Select.Positioner>
                    <Select.Popup>
                      {languageOptions.map((opt) => (
                        <Select.Item key={opt.value} value={opt.value}>
                          <Select.ItemText>{opt.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Popup>
                  </Select.Positioner>
                </Select.Portal>
              </Select.Root>
            </div>
          </section>

          <Separator />

          {/* Badge */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Badge (Base UI)</h2>
            <div className={styles.componentRow}>
              <Badge>Default</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="success">Success</Badge>
            </div>
          </section>

          <Separator />

          {/* Card */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Card (Base UI)</h2>
            <Card>
              <CardHeader><CardTitle>Card Title</CardTitle></CardHeader>
              <CardContent><p>Card content goes here.</p></CardContent>
              <CardFooter><Button size="sm">Action</Button></CardFooter>
            </Card>
          </section>

          <Separator />

          {/* Dialog */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Dialog</h2>
            <Dialog.Root>
              <Dialog.Trigger render={<Button />}>Open Dialog</Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Backdrop />
                <Dialog.Popup>
                  <Dialog.Title>Dialog</Dialog.Title>
                  <Dialog.Description>Dialog content here.</Dialog.Description>
                  <div className={styles.dialogActions}>
                    <Dialog.Close render={<Button variant="ghost" />}>Close</Dialog.Close>
                  </div>
                </Dialog.Popup>
              </Dialog.Portal>
            </Dialog.Root>
          </section>

          <Separator />

          {/* Popover */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Popover</h2>
            <Popover.Root>
              <Popover.Trigger render={<Button variant="secondary" />}>Popover</Popover.Trigger>
              <Popover.Portal>
                <Popover.Positioner>
                  <Popover.Popup>Popover content</Popover.Popup>
                </Popover.Positioner>
              </Popover.Portal>
            </Popover.Root>
          </section>

          <Separator />

          {/* Tooltip */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tooltip</h2>
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="ghost" />}>Hover</Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner>
                  <Tooltip.Popup>Tooltip text</Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          </section>

          <Separator />

          {/* Menu */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Menu</h2>
            <Menu.Root>
              <Menu.Trigger render={<Button variant="secondary" />}>Menu ▾</Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner>
                  <Menu.Popup>
                    <Menu.Item>Item 1</Menu.Item>
                    <Menu.Item>Item 2</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Item 3</Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
          </section>

          <Separator />

          {/* Tabs */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tabs</h2>
            <Tabs.Root defaultValue="t1">
              <Tabs.List>
                <Tabs.Tab value="t1">Tab 1</Tabs.Tab>
                <Tabs.Tab value="t2">Tab 2</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="t1"><div className={styles.tabContent}>Content 1</div></Tabs.Panel>
              <Tabs.Panel value="t2"><div className={styles.tabContent}>Content 2</div></Tabs.Panel>
            </Tabs.Root>
          </section>

          <Separator />

          {/* Accordion */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Accordion</h2>
            <Accordion.Root>
              <Accordion.Item value="a1">
                <Accordion.Header><Accordion.Trigger>Section 1</Accordion.Trigger></Accordion.Header>
                <Accordion.Panel>Content 1</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="a2">
                <Accordion.Header><Accordion.Trigger>Section 2</Accordion.Trigger></Accordion.Header>
                <Accordion.Panel>Content 2</Accordion.Panel>
              </Accordion.Item>
            </Accordion.Root>
          </section>

          <Separator />

          {/* Progress */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Progress</h2>
            <div style={{ maxWidth: "300px" }}>
              <Progress.Root value={65}>
                <Progress.Track><Progress.Indicator /></Progress.Track>
              </Progress.Root>
            </div>
          </section>

          <Separator />

          {/* Meter */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Meter</h2>
            <div style={{ maxWidth: "300px" }}>
              <Meter.Root value={0.7}>
                <Meter.Track><Meter.Indicator /></Meter.Track>
              </Meter.Root>
            </div>
          </section>

          <Separator />

          {/* Avatar */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Avatar</h2>
            <div className={styles.componentRow}>
              <Avatar.Root><Avatar.Fallback>AB</Avatar.Fallback></Avatar.Root>
            </div>
          </section>

          <Separator />

          {/* Slider */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Slider</h2>
            <div style={{ maxWidth: "300px" }}>
              <Slider.Root value={sliderValue} onValueChange={(v) => setSliderValue(typeof v === 'number' ? v : (v[0] ?? 0))} min={0} max={100}>
                <Slider.Track><Slider.Indicator /></Slider.Track>
                <Slider.Thumb />
              </Slider.Root>
              <div className={styles.sliderValue}>Value: {sliderValue}</div>
            </div>
          </section>

          <Separator />

          {/* NumberField */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Number Field</h2>
            <div style={{ maxWidth: "150px" }}>
              <NumberField.Root value={numberValue} onValueChange={(v) => setNumberValue(v ?? 0)} min={0} max={100}>
                <NumberField.Group>
                  <NumberField.Decrement>−</NumberField.Decrement>
                  <NumberField.Input />
                  <NumberField.Increment>+</NumberField.Increment>
                </NumberField.Group>
              </NumberField.Root>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

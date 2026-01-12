Below is a **brand + design system guide** extracted from (and faithful to) the current unsandbox look: *olive terminal UI, CRT/pixel vibe, gold “phosphor” accent, heavy bordered panels, utilitarian density*. I’m also folding in the missing pieces a modern system needs so Claude Code can build a cohesive demo with Base UI.

---

## 1) Brand foundations

### What the current design already communicates (keep this)

* **“Terminal-grade” trust**: feels like infrastructure, not a consumer app.
* **Anonymous / hacker-friendly / low-friction**: muted palette + CLI links reinforce “tooling”.
* **Practical power**: lots of dense info, minimal decoration, “ship it”.

### Brand archetype

* **The Operator** (primary): reliable, sharp, minimal, efficient.
* **The Tinkerer** (secondary): playful retro computing nostalgia.

### Brand promise (one sentence)

**Run code safely anywhere, instantly — with the feel of a battle-tested terminal, and the polish of a modern platform.**

### Tone of voice

* **Direct, technical, calm**
* Prefer *verbs + outcomes*: “Run”, “Snapshot”, “Freeze”, “Deploy”
* Avoid hype words. Replace “revolutionary” → “deterministic”, “isolated”, “auditable”.

---

## 2) Visual identity

### Core motif

**“Phosphor terminal on olive hardware”**

* Dark green/charcoal surfaces
* Gold phosphor highlight
* Boxy panels, thin borders, crisp separators

### Modernization (without breaking the vibe)

Keep the terminal skin, but add:

* **Clear typographic hierarchy** (bigger headings, calmer body size)
* **Consistent spacing system** (8pt grid)
* **Fewer border layers** (use *either* border *or* shadow/inset, not 3 at once)
* **Accessible focus rings** and modern input affordances
* **Subtle rounding** (small radius) to prevent “1998 HTML table” feel

### Logo/wordmark guidance

Current “unsandbox.com” reads like a pixel/terminal wordmark (great).

* Use **one lockup** in header; don’t repeat elsewhere.
* Provide a **compact mark** variant for mobile (e.g., `usbx` or a simple terminal prompt block).
* Clear space: at least **1× logotype height** around it.

---

## 3) Color system (tokens)

From the screenshot, the palette is essentially:

### Brand palette (hex)

* **Bg / deepest**: `#191A19` (near-black)
* **Bg / primary**: `#1D2920` (deep green-charcoal)
* **Surface / raised**: `#3F4538` (mid olive)
* **Surface / header band**: `#4D5944` (lighter olive)
* **Border / subtle**: `#2A332B` (derive from bg; use slightly lighter than bg)
* **Text / primary**: `#D2D3CF` (soft off-white)
* **Text / muted**: `#A8A9A8` (muted gray)
* **Phosphor accent**: `#C0B55F` (gold)
* **Phosphor accent alt** (brighter): `#BDB15D`

### Semantic roles (what engineers should actually use)

Create **role tokens** so you can adjust later without refactoring:

```css
--color-bg: #191A19;
--color-surface: #1D2920;
--color-surface-2: #3F4538;
--color-surface-3: #4D5944;

--color-border: #2A332B;
--color-border-strong: #3F4538;

--color-text: #D2D3CF;
--color-text-muted: #A8A9A8;

--color-accent: #C0B55F;
--color-accent-strong: #BDB15D;
```

### States (add these for modern UX)

```css
--color-success: #6FBF8A;   /* keep muted */
--color-warning: #D8B25A;   /* can reuse accent family */
--color-danger:  #D06C6C;   /* muted red */
--color-focus:   #C0B55F;   /* focus ring */
```

### Gradients (optional, very subtle)

* Only for hero bands or header chrome:

  * `linear-gradient(180deg, #4D5944 0%, #3F4538 100%)`

### Contrast rule

* Ensure body text `--color-text` on `--color-surface` meets AA.
* Gold accent should never be the *only* indicator (pair with underline, icon, or weight).

---

## 4) Typography

### Type philosophy

* Keep the **terminal mono** feel, but modernize with:

  * Mono for **UI chrome + code + labels**
  * Clean sans for **marketing headings and body** (optional, but recommended)

### Recommended font stack

**Option A (pure terminal, simplest)**

* UI + body: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

**Option B (modern terminal hybrid)**

* Headings/body: `Inter` (or `system-ui`)
* UI labels/code: `JetBrains Mono` or `IBM Plex Mono`

### Type scale (modern hierarchy)

* Display: 32–40
* H1: 28–32
* H2: 22–24
* H3: 18–20
* Body: 15–16
* Small: 13–14
* Micro: 11–12

### Styling rules

* **Headings**: slightly tighter letter spacing, higher contrast
* **Body**: generous line height (1.5–1.7) to reduce “dense terminal fatigue”
* **Links**: gold + underline (always), hover brightens, active slightly dims

---

## 5) Layout & spacing

### Grid

* Desktop: 12-column, max width 1100–1200
* Tablet: 8-column
* Mobile: 4-column

### Spacing system (8pt)

Use tokens: `2, 4, 8, 12, 16, 24, 32, 48, 64`

### Surface architecture (important for “panel UI” sites)

* **Page BG**: darkest
* **Primary panels**: `--color-surface`
* **Raised cards**: `--color-surface-2`
* **Top chrome bands**: `--color-surface-3`
* Borders: 1px; avoid double borders on nested panels

### Corners

* Keep mostly square, but adopt a tiny modern radius:

  * Panels: `radius-2` (4px)
  * Buttons/inputs: `radius-2` or `radius-3` (6px)
  * Modals: `radius-4` (10–12px)

---

## 6) Components (Base UI-ready specs)

These are the “modern design system sections” that make implementation smooth.

### Buttons

Variants:

* **Primary**: bg accent, text bg-dark, border accent-strong
* **Secondary**: transparent bg, border, text accent
* **Tertiary/Ghost**: no border, text accent, hover surface-2
* **Danger**: muted red, same structure

States:

* Hover: +5–8% brightness
* Active: slight inset shadow
* Disabled: reduce opacity, remove glow
* Focus: 2px ring `--color-focus`

### Inputs

* Background: surface-2
* Border: border
* Focus: border accent + ring
* Placeholder: text-muted at ~70% opacity
* Validation: left border color success/warn/danger (very “terminal form”)

### Cards / Panels

* Default: surface + border
* Header strip optional: surface-3 band
* Use **one** visual depth method:

  * either border + inset shadow
  * or border + subtle outer shadow
  * avoid heavy beveling

### Navigation

* Top bar: surface-3 band
* Active item: accent underline + slightly brighter text
* Mobile: collapsible drawer with same panel aesthetic

### Tables (pricing, usage, logs)

* Header row: surface-3
* Row hover: surface-2
* Monospaced numbers, aligned right
* Status chips for “running / frozen / failed”

### Badges / Chips

* Neutral, success, warning, danger
* Terminal style: outlined chip with colored border and muted fill

### Modals / Dialogs

* Dark overlay
* Panel surface-2, border strong
* Focus trap visible
* Primary CTA aligned right, secondary left or next

### Toasts / Notifications

* Appear bottom-right like “system messages”
* Include small icon + short text + optional action link

### Tooltips

* Surface-3, border, small text, max width 240
* Keep them snappy (100–150ms)

---

## 7) Iconography

Style: **simple, geometric, 1.5px stroke**

* Prefer icons that feel “systems”: terminal, cube, snowflake/freeze, camera/snapshot, plug, shield.
* Avoid playful rounded glyph icons that fight the aesthetic.

---

## 8) Motion & interaction

Keep motion subtle and “system-like”:

* Panel hover: 120–160ms
* Drawer/modal: 180–220ms
* Avoid bouncy easing; use **ease-out** or linear-ish.
* Optional “terminal glow” on focus only (not constantly).

---

## 9) Accessibility & usability (must-have modernization)

* Visible keyboard focus (gold ring)
* Minimum 44px tap targets on mobile
* Don’t rely on color alone for status (add icon/label)
* Ensure link contrast and always underline
* Respect reduced motion preferences
* Use real semantic headings (H1/H2/H3) for docs + pricing

---

## 10) Content design (microcopy rules)

* Buttons: verbs (“View pricing”, “Open docs”, “Create session”)
* Labels: short and technical (“Timeout”, “Runtime”, “Snapshot ID”)
* Error messages: what happened + what to do next
* Avoid marketing fluff inside product UI; keep that on landing

---

## 11) Theming & token strategy (how to implement cleanly)

### Token layers

1. **Primitive tokens** (palette, raw spacing, radius)
2. **Semantic tokens** (bg, surface, text, border, accent)
3. **Component tokens** (button-bg, input-border, etc.)

This lets you keep the brand but tune it quickly during the “modernization pass”.

### CSS variables (recommended)

Base UI plays great with CSS variables + Tailwind (or plain CSS). Put the semantic tokens on `:root` and allow:

* `data-theme="terminal"` (default)
* optionally later: `data-theme="terminal-high-contrast"` or `data-theme="daylight"`

---

## 12) Concrete modernization checklist (highest ROI)

If you do only a few things to modernize while staying loyal:

1. **Increase whitespace** in sections (more padding, fewer nested borders)
2. **Improve type hierarchy** (bigger headings, calmer body)
3. **Standardize components** (one button style system, one input system)
4. **Add focus + hover states** that are consistent everywhere
5. **Make cards feel intentional** (consistent radius + border + spacing)
6. **Responsive layout**: collapse the dense grid into stacked panels cleanly

---

## 13) Example page structure for your Base UI demo (matches the screenshot, but cleaner)

* Top chrome bar: logo left, Docs/Pricing right
* Hero panel:

  * H1 + short 2-line pitch
  * CTA row (Primary: Playground, Secondary: View Pricing, Ghost: API Docs, Ghost: CLI)
* “Why unsandbox?” as a 4-card grid
* Use cases as a 3-card grid
* Footer: links + tiny status/uptime

---

If you want, I can also give you a **ready-to-paste “design tokens” JSON** (colors/type/space/radius) and a **Base UI component mapping** (Button, Input, Dialog, Tooltip, Tabs, Menu) so Claude Code can implement the system with almost no guesswork.


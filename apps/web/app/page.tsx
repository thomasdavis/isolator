import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

const modes = [
  {
    id: "execute",
    icon: "▶",
    title: "Execute",
    desc: "One-shot code execution",
    detail: "Run code once, get results. Fire and forget.",
  },
  {
    id: "sessions",
    icon: "◉",
    title: "Sessions",
    desc: "Interactive shell/REPL",
    detail: "Persistent terminal sessions with state.",
  },
  {
    id: "services",
    icon: "◆",
    title: "Services",
    desc: "Deployable web apps",
    detail: "Long-running services with custom domains.",
  },
  {
    id: "snapshots",
    icon: "◫",
    title: "Snapshots",
    desc: "Save & clone state",
    detail: "Freeze containers and restore later.",
  },
];

const features = [
  {
    icon: "❄",
    title: "Freeze / Unfreeze",
    desc: "Pause containers when idle, wake them instantly on demand. Pay only for active compute time.",
  },
  {
    icon: "🌐",
    title: "Persistent Services",
    desc: "Deploy web apps with automatic Let's Encrypt HTTPS. Custom domains, port mapping, and wake-on-request.",
  },
  {
    icon: "📸",
    title: "Container Snapshots",
    desc: "Save container state and restore later. Clone snapshots to new sessions or services.",
  },
  {
    icon: "💾",
    title: "Deep Freeze",
    desc: "Services hibernate when keys expire. Wake them years later — data preserved indefinitely.",
  },
];

const useCases = [
  {
    title: "AI Code Assistants",
    desc: "Execute code from LLM outputs safely. Perfect for coding agents and tool-use patterns with async job polling.",
    languages: ["python", "javascript", "typescript"],
  },
  {
    title: "Code Playgrounds",
    desc: "Let users run code in your product. 42+ languages supported without infrastructure headaches.",
    languages: ["go", "rust", "java"],
  },
  {
    title: "Remote Development",
    desc: "Full dev environments in the cloud. SSH access, persistent sessions, custom runtimes.",
    languages: ["c++", "ruby", "php"],
  },
];

const resources = [
  {
    title: "API Docs",
    desc: "Complete endpoint documentation with code samples in 42+ languages.",
    link: "/docs",
    cta: "View Docs",
  },
  {
    title: "CLI",
    desc: "Command-line client for sessions, services, and executions.",
    link: "/docs#cli",
    cta: "Get CLI",
  },
  {
    title: "Blog",
    desc: "Deep Unfreeze: Services that sleep for decades, then wake up when anyone pays the toll.",
    link: "/blog",
    cta: "Read More",
  },
];

const codeExample = `curl -X POST https://api.unsandbox.com/execute \\
  -H "Authorization: Bearer $UNSANDBOX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "language": "python",
    "code": "print(sum(range(100)))",
    "network_mode": "zerotrust",
    "ttl": 30
  }'`;

const responseExample = `{
  "stdout": "4950\\n",
  "stderr": "",
  "exit_code": 0,
  "execution_time_ms": 42,
  "container_id": "exec_7x9k2m..."
}`;

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              42+ languages supported
            </div>
            <h1 className={styles.heroTitle}>
              Code Execution API<br />
              <span className={styles.heroAccent}>for AI Agents</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Execute code in 42+ languages via a simple REST API. Interactive sessions,
              persistent services with HTTPS, snapshots, and async job polling with cancellation
              — perfect for LLM tool use.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/playground" className={styles.primaryBtn}>
                Playground
              </Link>
              <Link href="/pricing" className={styles.secondaryBtn}>
                View Pricing
              </Link>
              <Link href="/docs" className={styles.ghostBtn}>
                API Docs
              </Link>
              <Link href="/docs#cli" className={styles.ghostBtn}>
                CLI
              </Link>
              <Link href="/console" className={styles.ghostBtn}>
                Console
              </Link>
            </div>
          </div>
        </section>

        {/* Mode Selector */}
        <section className={styles.modes}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Pick your mode</h2>
            <div className={styles.modeGrid}>
              {modes.map((mode) => (
                <div key={mode.id} className={styles.modeCard}>
                  <div className={styles.modeIcon}>{mode.icon}</div>
                  <h3 className={styles.modeTitle}>{mode.title}</h3>
                  <p className={styles.modeDesc}>{mode.desc}</p>
                  <p className={styles.modeDetail}>{mode.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Example */}
        <section className={styles.apiSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>One API request</h2>
            <div className={styles.apiGrid}>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeLabel}>Request</span>
                  <button className={styles.copyBtn}>Copy</button>
                </div>
                <pre className={styles.code}>{codeExample}</pre>
              </div>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeLabel}>Response</span>
                </div>
                <pre className={styles.code}>{responseExample}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why unsandbox?</h2>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <div key={feature.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className={styles.security}>
          <div className={styles.container}>
            <div className={styles.securityGrid}>
              <div className={styles.securityContent}>
                <h2 className={styles.sectionTitle}>Security & Networking</h2>
                <p className={styles.securityDesc}>
                  Every container runs in complete isolation. Choose your network mode:
                </p>
                <div className={styles.networkModes}>
                  <div className={styles.networkMode}>
                    <code className={styles.networkCode}>zerotrust</code>
                    <span>No network access. Complete isolation. Default.</span>
                  </div>
                  <div className={styles.networkMode}>
                    <code className={styles.networkCode}>semitrusted</code>
                    <span>Outbound HTTP/S only. No inbound.</span>
                  </div>
                </div>
                <Link href="/docs#security" className={styles.learnMore}>
                  Learn more about security →
                </Link>
              </div>
              <div className={styles.securityVisual}>
                <div className={styles.terminalWindow}>
                  <div className={styles.terminalHeader}>
                    <span className={styles.terminalDot}></span>
                    <span className={styles.terminalDot}></span>
                    <span className={styles.terminalDot}></span>
                    <span className={styles.terminalTitle}>container isolation</span>
                  </div>
                  <div className={styles.terminalBody}>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span> network_mode=zerotrust
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span> curl google.com
                    </div>
                    <div className={styles.terminalError}>
                      curl: (6) Could not resolve host
                    </div>
                    <div className={styles.terminalLine}>
                      <span className={styles.prompt}>$</span> <span className={styles.cursor}>_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className={styles.useCases}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Use cases</h2>
            <div className={styles.useCaseGrid}>
              {useCases.map((useCase) => (
                <div key={useCase.title} className={styles.useCaseCard}>
                  <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                  <p className={styles.useCaseDesc}>{useCase.desc}</p>
                  <div className={styles.useCaseLangs}>
                    {useCase.languages.map((lang) => (
                      <span key={lang} className={styles.langTag}>{lang}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Console Preview */}
        <section className={styles.console}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Web Console</h2>
            <p className={styles.consoleSubtitle}>
              Manage sessions, services, snapshots, and API keys from your browser.
            </p>
            <div className={styles.consolePreview}>
              <div className={styles.consoleSidebar}>
                <div className={styles.consoleSidebarItem}>◉ Sessions</div>
                <div className={`${styles.consoleSidebarItem} ${styles.active}`}>◆ Services</div>
                <div className={styles.consoleSidebarItem}>◫ Snapshots</div>
                <div className={styles.consoleSidebarItem}>🔑 API Keys</div>
              </div>
              <div className={styles.consoleMain}>
                <div className={styles.consoleHeader}>
                  <span>Active Services</span>
                  <button className={styles.consoleBtn}>+ Deploy</button>
                </div>
                <div className={styles.consoleTable}>
                  <div className={styles.consoleRow}>
                    <span className={styles.statusRunning}>●</span>
                    <span>api-server-prod</span>
                    <span className={styles.muted}>python:3.11</span>
                    <span className={styles.muted}>2h ago</span>
                  </div>
                  <div className={styles.consoleRow}>
                    <span className={styles.statusFrozen}>●</span>
                    <span>dev-sandbox</span>
                    <span className={styles.muted}>node:20</span>
                    <span className={styles.muted}>frozen</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/console" className={styles.consoleLink}>
              Open Console →
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className={styles.resources}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Resources</h2>
            <div className={styles.resourceGrid}>
              {resources.map((resource) => (
                <div key={resource.title} className={styles.resourceCard}>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <p className={styles.resourceDesc}>{resource.desc}</p>
                  <Link href={resource.link} className={styles.resourceLink}>
                    {resource.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className={styles.pricingTeaser}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Simple Pricing</h2>
            <div className={styles.pricingCompare}>
              <div className={styles.pricingTier}>
                <span className={styles.tierLabel}>Development</span>
                <div className={styles.tierPrice}>
                  <span className={styles.price}>$7</span>
                  <span className={styles.period}>/mo</span>
                </div>
                <p className={styles.tierSpecs}>1 vCPU, 2GB RAM</p>
              </div>
              <div className={styles.pricingVs}>
                <span className={styles.vsLabel}>vs. AWS ECS Fargate</span>
                <div className={styles.tierPrice}>
                  <span className={styles.priceStrike}>$30</span>
                  <span className={styles.period}>/mo</span>
                </div>
                <p className={styles.tierSpecs}>1 vCPU, 2GB RAM</p>
                <p className={styles.savingsText}>Save 77% monthly or up to 83% yearly</p>
              </div>
              <div className={styles.pricingTier}>
                <span className={styles.tierLabel}>Production</span>
                <div className={styles.tierPrice}>
                  <span className={styles.price}>$91</span>
                  <span className={styles.period}>/mo</span>
                </div>
                <p className={styles.tierSpecs}>4 concurrent, 91 RPM</p>
              </div>
            </div>
            <Link href="/pricing" className={styles.pricingBtn}>
              View Full Pricing →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./docs.module.css";
import Link from "next/link";
import { useState } from "react";

const sidebar = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", id: "intro" },
      { label: "Quickstart", id: "quickstart" },
      { label: "Authentication", id: "auth" },
    ],
  },
  {
    title: "Execution Modes",
    items: [
      { label: "Execute", id: "execute" },
      { label: "Sessions", id: "sessions" },
      { label: "Services", id: "services" },
      { label: "Snapshots", id: "snapshots" },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Network Modes", id: "security" },
      { label: "Container Isolation", id: "isolation" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "CLI", id: "cli" },
      { label: "SDKs", id: "sdks" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "API Reference", id: "api" },
      { label: "Examples", id: "examples" },
      { label: "Languages", id: "languages" },
    ],
  },
];

const codeExamples = {
  curl: `curl -X POST https://api.unsandbox.com/execute \\
  -H "Authorization: Bearer $UNSANDBOX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "language": "python",
    "code": "print(sum(range(100)))"
  }'`,
  python: `import unsandbox

client = unsandbox.Client()

result = client.execute(
    language="python",
    code="print(sum(range(100)))"
)

print(result.stdout)  # "4950"`,
  javascript: `import { Unsandbox } from '@unsandbox/sdk';

const client = new Unsandbox();

const result = await client.execute({
  language: 'python',
  code: 'print(sum(range(100)))'
});

console.log(result.stdout); // "4950"`,
};

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [activeTab, setActiveTab] = useState<"curl" | "python" | "javascript">("curl");

  return (
    <>
      <Header />
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            {sidebar.map((section) => (
              <div key={section.title} className={styles.sidebarSection}>
                <h4 className={styles.sidebarTitle}>{section.title}</h4>
                <ul className={styles.sidebarList}>
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`${styles.sidebarLink} ${activeSection === item.id ? styles.active : ""}`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.content}>
            {activeSection === "intro" && (
              <article className={styles.article}>
                <h1>Introduction</h1>
                <p className={styles.lead}>
                  unsandbox is a remote code execution API that lets you run untrusted code
                  in isolated containers with zero-trust networking.
                </p>

                <h2>What is unsandbox?</h2>
                <p>
                  unsandbox provides secure, isolated containers for running arbitrary code.
                  Whether you're building an AI coding assistant, a code playground, or a
                  remote development environment, unsandbox handles the infrastructure so
                  you can focus on your product.
                </p>

                <h2>Key Features</h2>
                <ul>
                  <li><strong>42+ Languages:</strong> Python, JavaScript, Go, Rust, Java, and more</li>
                  <li><strong>Multiple Modes:</strong> One-shot execution, interactive sessions, or deployable services</li>
                  <li><strong>Zero-Trust:</strong> Containers are network-isolated by default</li>
                  <li><strong>Snapshots:</strong> Save and restore container state instantly</li>
                  <li><strong>Fast:</strong> Sub-100ms cold starts for most languages</li>
                </ul>

                <h2>Use Cases</h2>
                <div className={styles.useCaseGrid}>
                  <div className={styles.useCase}>
                    <h3>AI Coding Assistants</h3>
                    <p>Execute code from LLM outputs safely without risking your infrastructure.</p>
                  </div>
                  <div className={styles.useCase}>
                    <h3>Code Playgrounds</h3>
                    <p>Let users run code in your product without managing containers.</p>
                  </div>
                  <div className={styles.useCase}>
                    <h3>Remote Development</h3>
                    <p>Full dev environments with SSH access and persistent sessions.</p>
                  </div>
                </div>
              </article>
            )}

            {activeSection === "quickstart" && (
              <article className={styles.article}>
                <h1>Quickstart</h1>
                <p className={styles.lead}>
                  Get up and running in under a minute.
                </p>

                <h2>1. Get your API key</h2>
                <p>
                  Create a free account and grab your API key from the{" "}
                  <Link href="/console">console</Link>.
                </p>

                <h2>2. Make your first request</h2>
                <div className={styles.tabContainer}>
                  <div className={styles.tabs}>
                    {(["curl", "python", "javascript"] as const).map((tab) => (
                      <button
                        key={tab}
                        className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className={styles.codeBlock}>
                    <pre>{codeExamples[activeTab]}</pre>
                  </div>
                </div>

                <h2>3. Check the response</h2>
                <div className={styles.codeBlock}>
                  <pre>{`{
  "stdout": "4950\\n",
  "stderr": "",
  "exit_code": 0,
  "execution_time_ms": 42,
  "container_id": "exec_7x9k2m..."
}`}</pre>
                </div>

                <p>
                  That's it! You've just executed Python code in an isolated container.
                </p>
              </article>
            )}

            {activeSection === "auth" && (
              <article className={styles.article}>
                <h1>Authentication</h1>
                <p className={styles.lead}>
                  All API requests require authentication via Bearer token.
                </p>

                <h2>API Keys</h2>
                <p>
                  Generate API keys in the <Link href="/console">console</Link>.
                  Each key is scoped to your account and can be revoked at any time.
                </p>

                <h2>Making Authenticated Requests</h2>
                <p>
                  Include your API key in the Authorization header:
                </p>
                <div className={styles.codeBlock}>
                  <pre>{`Authorization: Bearer your_api_key_here`}</pre>
                </div>

                <div className={styles.warning}>
                  <strong>Security Tip:</strong> Never expose your API keys in client-side code.
                  Always make API calls from your server.
                </div>
              </article>
            )}

            {activeSection === "execute" && (
              <article className={styles.article}>
                <h1>Execute Mode</h1>
                <p className={styles.lead}>
                  One-shot code execution. Run code once, get results, done.
                </p>

                <h2>How it works</h2>
                <p>
                  Execute mode spins up a fresh container, runs your code, returns the output,
                  and terminates the container. Perfect for stateless operations.
                </p>

                <h2>Request</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /execute

{
  "language": "python",
  "code": "print('Hello, World!')",
  "network_mode": "zerotrust",
  "ttl": 30
}`}</pre>
                </div>

                <h2>Parameters</h2>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>language</code></td>
                      <td>string</td>
                      <td>Programming language (required)</td>
                    </tr>
                    <tr>
                      <td><code>code</code></td>
                      <td>string</td>
                      <td>Code to execute (required)</td>
                    </tr>
                    <tr>
                      <td><code>network_mode</code></td>
                      <td>string</td>
                      <td>zerotrust or semitrusted (default: zerotrust)</td>
                    </tr>
                    <tr>
                      <td><code>ttl</code></td>
                      <td>integer</td>
                      <td>Max execution time in seconds (default: 30)</td>
                    </tr>
                  </tbody>
                </table>
              </article>
            )}

            {activeSection === "sessions" && (
              <article className={styles.article}>
                <h1>Sessions Mode</h1>
                <p className={styles.lead}>
                  Interactive shell sessions with persistent state.
                </p>

                <h2>How it works</h2>
                <p>
                  Sessions maintain state between commands. Variables, installed packages,
                  and file changes persist until the session expires or is terminated.
                </p>

                <h2>Create a Session</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /sessions

{
  "language": "python",
  "ttl": 3600
}`}</pre>
                </div>

                <h2>Send Commands</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /sessions/{session_id}/exec

{
  "code": "x = 42"
}

// Later...
POST /sessions/{session_id}/exec

{
  "code": "print(x)"  // Output: 42
}`}</pre>
                </div>
              </article>
            )}

            {activeSection === "services" && (
              <article className={styles.article}>
                <h1>Services Mode</h1>
                <p className={styles.lead}>
                  Deploy long-running web applications with custom domains.
                </p>

                <h2>How it works</h2>
                <p>
                  Services are persistent containers that expose HTTP endpoints.
                  Perfect for deploying APIs, web apps, or background workers.
                </p>

                <h2>Deploy a Service</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /services

{
  "name": "my-api",
  "language": "python",
  "code": "from flask import Flask\\napp = Flask(__name__)\\n...",
  "port": 8080
}`}</pre>
                </div>

                <p>
                  Your service will be available at <code>my-api.unsandbox.run</code>.
                </p>
              </article>
            )}

            {activeSection === "snapshots" && (
              <article className={styles.article}>
                <h1>Snapshots</h1>
                <p className={styles.lead}>
                  Save and restore container state instantly.
                </p>

                <h2>How it works</h2>
                <p>
                  Snapshots capture the complete state of a container: memory, filesystem,
                  running processes. Restore later to pick up exactly where you left off.
                </p>

                <h2>Create a Snapshot</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /sessions/{session_id}/snapshot

{
  "name": "my-checkpoint"
}`}</pre>
                </div>

                <h2>Restore from Snapshot</h2>
                <div className={styles.codeBlock}>
                  <pre>{`POST /sessions

{
  "from_snapshot": "snap_abc123..."
}`}</pre>
                </div>
              </article>
            )}

            {activeSection === "security" && (
              <article className={styles.article}>
                <h1>Network Modes</h1>
                <p className={styles.lead}>
                  Control container network access with two security levels.
                </p>

                <h2>Zero-Trust (Default)</h2>
                <p>
                  Complete network isolation. No inbound or outbound connections allowed.
                  The safest option for running untrusted code.
                </p>
                <div className={styles.codeBlock}>
                  <pre>{`{
  "network_mode": "zerotrust"
}`}</pre>
                </div>

                <h2>Semi-Trusted</h2>
                <p>
                  Allows outbound HTTP/HTTPS connections. No inbound connections.
                  Use when code needs to fetch external data.
                </p>
                <div className={styles.codeBlock}>
                  <pre>{`{
  "network_mode": "semitrusted"
}`}</pre>
                </div>

                <div className={styles.warning}>
                  <strong>Security Note:</strong> Semi-trusted mode allows code to make
                  external requests. Only use with code you've vetted.
                </div>
              </article>
            )}

            {activeSection === "cli" && (
              <article className={styles.article}>
                <h1>CLI</h1>
                <p className={styles.lead}>
                  Execute code from your terminal with the unsandbox CLI.
                </p>

                <h2>Installation</h2>
                <div className={styles.codeBlock}>
                  <pre>{`# macOS / Linux
curl -fsSL https://unsandbox.com/install.sh | sh

# or with npm
npm install -g @unsandbox/cli`}</pre>
                </div>

                <h2>Usage</h2>
                <div className={styles.codeBlock}>
                  <pre>{`# Execute a file
unsandbox run script.py

# Start an interactive session
unsandbox session python

# Deploy a service
unsandbox deploy --name my-api`}</pre>
                </div>
              </article>
            )}

            {activeSection === "examples" && (
              <article className={styles.article}>
                <h1>Examples</h1>
                <p className={styles.lead}>
                  Common patterns and use cases.
                </p>

                <h2>AI Code Execution</h2>
                <div className={styles.codeBlock}>
                  <pre>{`# Execute LLM-generated code safely
result = client.execute(
    language="python",
    code=llm_output,
    network_mode="zerotrust",  # No network access
    ttl=10  # 10 second timeout
)`}</pre>
                </div>

                <h2>Interactive REPL</h2>
                <div className={styles.codeBlock}>
                  <pre>{`# Create a persistent session
session = client.sessions.create(language="python")

# Execute multiple commands
session.exec("import pandas as pd")
session.exec("df = pd.DataFrame({'a': [1, 2, 3]})")
result = session.exec("print(df.sum())")`}</pre>
                </div>

                <h2>Jupyter-like Notebook</h2>
                <div className={styles.codeBlock}>
                  <pre>{`# Run cells sequentially, preserving state
for cell in notebook_cells:
    result = session.exec(cell.code)
    cell.output = result.stdout`}</pre>
                </div>
              </article>
            )}

            {/* Default fallback for other sections */}
            {!["intro", "quickstart", "auth", "execute", "sessions", "services", "snapshots", "security", "cli", "examples"].includes(activeSection) && (
              <article className={styles.article}>
                <h1>{sidebar.flatMap(s => s.items).find(i => i.id === activeSection)?.label || "Documentation"}</h1>
                <p className={styles.lead}>
                  This section is coming soon.
                </p>
                <p>
                  Check back later or explore other sections of the documentation.
                </p>
              </article>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

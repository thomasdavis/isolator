"use client";

import { Header } from "../components/Header";
import styles from "./playground.module.css";
import { useState } from "react";

const languages = [
  { id: "python", name: "Python", icon: "🐍" },
  { id: "javascript", name: "JavaScript", icon: "⚡" },
  { id: "typescript", name: "TypeScript", icon: "📘" },
  { id: "go", name: "Go", icon: "🔵" },
  { id: "rust", name: "Rust", icon: "🦀" },
  { id: "java", name: "Java", icon: "☕" },
  { id: "cpp", name: "C++", icon: "⚙️" },
  { id: "ruby", name: "Ruby", icon: "💎" },
];

const defaultCode: Record<string, string> = {
  python: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

numbers = [64, 34, 25, 12, 22, 11, 90]
print(quicksort(numbers))`,
  javascript: `function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quicksort(left), ...middle, ...quicksort(right)];
}

console.log(quicksort([64, 34, 25, 12, 22, 11, 90]));`,
};

const mockOutput = `[11, 12, 22, 25, 34, 64, 90]

Process exited with code 0
Execution time: 23ms`;

export default function PlaygroundPage() {
  const [selectedLang, setSelectedLang] = useState("python");
  const [code, setCode] = useState(defaultCode.python || "");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Settings state
  const [envVars, setEnvVars] = useState("");
  const [returnArtifact, setReturnArtifact] = useState(false);
  const [returnWasm, setReturnWasm] = useState(false);

  const handleLanguageChange = (langId: string) => {
    setSelectedLang(langId);
    setCode(defaultCode[langId] || `// Write your ${langId} code here...`);
    setOutput("");
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");
    setTimeout(() => {
      setOutput(mockOutput);
      setIsRunning(false);
    }, 800);
  };

  const handleGenerate = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const newCode = defaultCode[selectedLang] ?? defaultCode.python ?? "";
      setCode(newCode);
      setIsGenerating(false);
      setShowAiPanel(false);
      setAiPrompt("");
    }, 1200);
  };

  const currentLang = languages.find((l) => l.id === selectedLang);

  return (
    <>
      <Header />
      <div className={styles.playground}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <div className={styles.langSelector}>
              <span className={styles.langIcon}>{currentLang?.icon}</span>
              <select
                value={selectedLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={styles.langSelect}
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.toolbarCenter}>
            <button
              className={styles.runBtn}
              onClick={handleRun}
              disabled={isRunning || !code.trim()}
            >
              {isRunning ? (
                <>
                  <span className={styles.spinner}></span>
                  Running...
                </>
              ) : (
                <>
                  <span className={styles.playIcon}>▶</span>
                  Run
                </>
              )}
            </button>
          </div>

          <div className={styles.toolbarRight}>
            <button
              className={`${styles.toolBtn} ${showAiPanel ? styles.active : ""}`}
              onClick={() => {
                setShowAiPanel(!showAiPanel);
                setShowSettings(false);
              }}
            >
              <span>✨</span>
              AI
            </button>
            <button
              className={`${styles.toolBtn} ${showSettings ? styles.active : ""}`}
              onClick={() => {
                setShowSettings(!showSettings);
                setShowAiPanel(false);
              }}
            >
              <span>⚙</span>
              Options
            </button>
          </div>
        </div>

        {/* AI Panel (slide down) */}
        {showAiPanel && (
          <div className={styles.aiPanel}>
            <div className={styles.aiPanelContent}>
              <input
                type="text"
                className={styles.aiInput}
                placeholder="Describe what code you want to generate..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                autoFocus
              />
              <button
                className={styles.generateBtn}
                onClick={handleGenerate}
                disabled={isGenerating || !aiPrompt.trim()}
              >
                {isGenerating ? "Generating..." : "Generate"}
              </button>
            </div>
            <div className={styles.aiHints}>
              <span
                className={styles.aiHint}
                onClick={() =>
                  setAiPrompt("Write a quicksort function and test it")
                }
              >
                quicksort
              </span>
              <span
                className={styles.aiHint}
                onClick={() => setAiPrompt("Create a simple HTTP server")}
              >
                http server
              </span>
              <span
                className={styles.aiHint}
                onClick={() => setAiPrompt("Binary search tree implementation")}
              >
                binary tree
              </span>
              <span
                className={styles.aiHint}
                onClick={() => setAiPrompt("Fibonacci sequence generator")}
              >
                fibonacci
              </span>
            </div>
          </div>
        )}

        {/* Settings Panel (slide down) */}
        {showSettings && (
          <div className={styles.settingsPanel}>
            <div className={styles.settingsGrid}>
              <div className={styles.settingsGroup}>
                <label className={styles.settingsLabel}>
                  Environment Variables
                </label>
                <textarea
                  className={styles.envInput}
                  placeholder="KEY=value (one per line)"
                  value={envVars}
                  onChange={(e) => setEnvVars(e.target.value)}
                  rows={2}
                />
              </div>
              <div className={styles.settingsGroup}>
                <label className={styles.settingsLabel}>Output Options</label>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={returnArtifact}
                      onChange={(e) => setReturnArtifact(e.target.checked)}
                    />
                    Return compiled artifact
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={returnWasm}
                      onChange={(e) => setReturnWasm(e.target.checked)}
                    />
                    Return WASM binary
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div className={styles.editorContainer}>
          <div className={styles.editorPane}>
            <div className={styles.paneHeader}>
              <span>Code</span>
              <button
                className={styles.clearBtn}
                onClick={() => setCode("")}
                title="Clear code"
              >
                Clear
              </button>
            </div>
            <textarea
              className={styles.editor}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write your code here..."
              spellCheck={false}
            />
          </div>

          <div className={styles.outputPane}>
            <div className={styles.paneHeader}>
              <span>Output</span>
              {output && (
                <span className={styles.successBadge}>✓ Success</span>
              )}
            </div>
            <div className={styles.output}>
              {isRunning ? (
                <div className={styles.runningState}>
                  <div className={styles.pulseRing}></div>
                  <span>Executing in container...</span>
                </div>
              ) : output ? (
                <pre>{output}</pre>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>▶</div>
                  <p>Click Run to execute your code</p>
                  <p className={styles.emptyHint}>
                    Output will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>
            <span className={styles.statusDot}></span>
            <span>Ready</span>
          </div>
          <div className={styles.statusRight}>
            <span>42+ languages</span>
            <span className={styles.statusDivider}>•</span>
            <span>Isolated containers</span>
            <span className={styles.statusDivider}>•</span>
            <span>Zero config</span>
          </div>
        </div>
      </div>
    </>
  );
}

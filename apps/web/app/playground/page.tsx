"use client";

import { Header } from "../components/Header";
import styles from "./playground.module.css";
import { useState } from "react";

const languages = [
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "go", name: "Go" },
  { id: "rust", name: "Rust" },
  { id: "java", name: "Java" },
  { id: "cpp", name: "C++" },
  { id: "ruby", name: "Ruby" },
  { id: "c", name: "C" },
  { id: "csharp", name: "C#" },
  { id: "php", name: "PHP" },
  { id: "swift", name: "Swift" },
  { id: "kotlin", name: "Kotlin" },
  { id: "scala", name: "Scala" },
  { id: "haskell", name: "Haskell" },
  { id: "lua", name: "Lua" },
  { id: "perl", name: "Perl" },
  { id: "r", name: "R" },
  { id: "julia", name: "Julia" },
  { id: "elixir", name: "Elixir" },
  { id: "clojure", name: "Clojure" },
  { id: "fortran", name: "Fortran" },
  { id: "cobol", name: "COBOL" },
  { id: "zig", name: "Zig" },
];

const examplePrompts = [
  "Write a quicksort function and print the sorted result of [64, 34, 25, 12, 22, 11, 90] to stdout",
  "Create a simple HTTP server that responds with 'Hello, World!'",
  "Implement a binary search tree with insert and search methods",
];

const defaultCode: Record<string, string> = {
  python: `# Paste, edit, or generate code here...

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

numbers = [64, 34, 25, 12, 22, 11, 90]
print(quicksort(numbers))`,
  javascript: `// Paste, edit, or generate code here...

function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quicksort(left), ...middle, ...quicksort(right)];
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(quicksort(numbers));`,
};

const mockOutput = `[11, 12, 22, 25, 34, 64, 90]

Process exited with code 0
Execution time: 23ms`;

export default function PlaygroundPage() {
  const [selectedLang, setSelectedLang] = useState("python");
  const [code, setCode] = useState(defaultCode.python || "");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState(examplePrompts[0]);
  const [envVars, setEnvVars] = useState("DEBUG=true\nUSERNAME=demo");
  const [returnArtifact, setReturnArtifact] = useState(true);
  const [returnWasm, setReturnWasm] = useState(true);
  const [autoFix, setAutoFix] = useState(false);

  const handleLanguageChange = (langId: string) => {
    setSelectedLang(langId);
    setCode(defaultCode[langId] || `// Paste, edit, or generate code here...`);
    setOutput("");
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");

    // Simulate execution delay
    setTimeout(() => {
      setOutput(mockOutput);
      setIsRunning(false);
    }, 800);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const newCode = defaultCode[selectedLang] ?? defaultCode.python ?? "";
      setCode(newCode);
      setIsGenerating(false);
    }, 1500);
  };

  const handleIterate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className={styles.playground}>
        {/* AI Prompt Section */}
        <div className={styles.promptSection}>
          <div className={styles.promptHeader}>
            <span className={styles.promptLabel}>unsandbox.</span>
            <span className={styles.promptDesc}>
              Write or generate code, execute in isolated containers, edit & fix syntax, download working binaries or WASM!
            </span>
          </div>
          <textarea
            className={styles.promptInput}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what code you want to generate..."
            rows={2}
          />
          <div className={styles.exampleBtns}>
            {examplePrompts.map((ex, i) => (
              <button
                key={i}
                className={styles.exampleBtn}
                onClick={() => setPrompt(ex)}
              >
                Example {i + 1}
              </button>
            ))}
          </div>
          <div className={styles.languageRow}>
            <select
              className={styles.langSelect}
              value={selectedLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.generateBtns}>
            <button
              className={styles.generateBtn}
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate New Code ✨"}
            </button>
            <button
              className={styles.iterateBtn}
              onClick={handleIterate}
              disabled={isGenerating || !code}
            >
              Iterate on Code 🔄
            </button>
          </div>
        </div>

        {/* Editor Section */}
        <div className={styles.editorContainer}>
          <div className={styles.editorPane}>
            <textarea
              className={styles.editor}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste, edit, or generate code here..."
              spellCheck={false}
            />
          </div>

          <div className={styles.outputPane}>
            <div className={styles.outputHeader}>
              {output ? (
                <span className={styles.outputSuccess}>✓ Executed successfully</span>
              ) : (
                <span>Execute code to see output here</span>
              )}
            </div>
            <div className={styles.outputOptions}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={returnArtifact}
                  onChange={(e) => setReturnArtifact(e.target.checked)}
                />
                Return Artifact
              </label>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={returnWasm}
                  onChange={(e) => setReturnWasm(e.target.checked)}
                />
                Return WASM
              </label>
            </div>
            <div className={styles.output}>
              {isRunning ? (
                <div className={styles.runningIndicator}>
                  <span className={styles.spinner}></span>
                  Executing code...
                </div>
              ) : output ? (
                <pre>{output}</pre>
              ) : (
                <div className={styles.placeholder}>
                  Output will appear here after execution
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className={styles.bottomControls}>
          <div className={styles.envSection}>
            <label className={styles.envLabel}>
              Environment Variables <span className={styles.envHint}>(optional, KEY=value format, one per line)</span>
            </label>
            <textarea
              className={styles.envInput}
              value={envVars}
              onChange={(e) => setEnvVars(e.target.value)}
              rows={2}
            />
          </div>

          <div className={styles.filesSection}>
            <label className={styles.filesLabel}>
              Input Files 📁
            </label>
            <div className={styles.fileUpload}>
              <button className={styles.chooseFilesBtn}>Choose files</button>
              <span className={styles.noFile}>No file chosen</span>
            </div>
            <span className={styles.filesHint}>Max 10 files, 5MB each, 10MB total</span>
          </div>

          <button
            className={styles.executeBtn}
            onClick={handleRun}
            disabled={isRunning || !code}
          >
            {isRunning ? "Executing..." : "Execute Code ▶"}
          </button>

          <label className={styles.autoFixCheckbox}>
            <input
              type="checkbox"
              checked={autoFix}
              onChange={(e) => setAutoFix(e.target.checked)}
            />
            Auto attempt to fix code issues
          </label>
        </div>
      </div>
    </>
  );
}

"use client";

import { Header } from "../components/Header";
import styles from "./playground.module.css";
import { useState } from "react";

const languages = [
  { id: "python", name: "Python", icon: "🐍" },
  { id: "javascript", name: "JavaScript", icon: "📜" },
  { id: "typescript", name: "TypeScript", icon: "📘" },
  { id: "go", name: "Go", icon: "🐹" },
  { id: "rust", name: "Rust", icon: "🦀" },
  { id: "java", name: "Java", icon: "☕" },
  { id: "cpp", name: "C++", icon: "⚡" },
  { id: "ruby", name: "Ruby", icon: "💎" },
];

const defaultCode: Record<string, string> = {
  python: `# Python Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(f"fib({i}) = {fibonacci(i)}")`,
  javascript: `// JavaScript Example
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}`,
  typescript: `// TypeScript Example
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}`,
  go: `// Go Example
package main

import "fmt"

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    for i := 0; i < 10; i++ {
        fmt.Printf("fib(%d) = %d\\n", i, fibonacci(i))
    }
}`,
  rust: `// Rust Example
fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    fibonacci(n - 1) + fibonacci(n - 2)
}

fn main() {
    for i in 0..10 {
        println!("fib({}) = {}", i, fibonacci(i));
    }
}`,
  java: `// Java Example
public class Main {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.printf("fib(%d) = %d%n", i, fibonacci(i));
        }
    }
}`,
  cpp: `// C++ Example
#include <iostream>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    for (int i = 0; i < 10; i++) {
        std::cout << "fib(" << i << ") = " << fibonacci(i) << std::endl;
    }
    return 0;
}`,
  ruby: `# Ruby Example
def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

10.times do |i|
  puts "fib(#{i}) = #{fibonacci(i)}"
end`,
};

const mockOutput = `fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34`;

export default function PlaygroundPage() {
  const [selectedLang, setSelectedLang] = useState("python");
  const [code, setCode] = useState(defaultCode.python);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [networkMode, setNetworkMode] = useState("zerotrust");

  const handleLanguageChange = (langId: string) => {
    setSelectedLang(langId);
    setCode(defaultCode[langId] || "");
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

  return (
    <>
      <Header />
      <div className={styles.playground}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <div className={styles.languageSelect}>
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  className={`${styles.langBtn} ${selectedLang === lang.id ? styles.active : ""}`}
                  onClick={() => handleLanguageChange(lang.id)}
                >
                  <span className={styles.langIcon}>{lang.icon}</span>
                  <span className={styles.langName}>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.toolbarRight}>
            <div className={styles.networkToggle}>
              <span className={styles.toggleLabel}>Network:</span>
              <button
                className={`${styles.networkBtn} ${networkMode === "zerotrust" ? styles.active : ""}`}
                onClick={() => setNetworkMode("zerotrust")}
              >
                zerotrust
              </button>
              <button
                className={`${styles.networkBtn} ${networkMode === "semitrusted" ? styles.active : ""}`}
                onClick={() => setNetworkMode("semitrusted")}
              >
                semitrusted
              </button>
            </div>
            <button
              className={styles.runBtn}
              onClick={handleRun}
              disabled={isRunning}
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
        </div>

        <div className={styles.editorContainer}>
          <div className={styles.editorPane}>
            <div className={styles.paneHeader}>
              <span className={styles.paneTitle}>
                <span className={styles.fileIcon}>◆</span>
                main.{selectedLang === "cpp" ? "cpp" : selectedLang === "javascript" ? "js" : selectedLang === "typescript" ? "ts" : selectedLang}
              </span>
            </div>
            <div className={styles.editorWrapper}>
              <div className={styles.lineNumbers}>
                {(code || "").split("\n").map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <textarea
                className={styles.editor}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
              />
            </div>
          </div>

          <div className={styles.outputPane}>
            <div className={styles.paneHeader}>
              <span className={styles.paneTitle}>
                <span className={styles.termIcon}>▸</span>
                Output
              </span>
              {output && (
                <span className={styles.execInfo}>
                  Executed in 42ms
                </span>
              )}
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
                  Click "Run" to execute your code
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>
            <span className={styles.statusItem}>
              <span className={styles.statusDot}></span>
              Ready
            </span>
            <span className={styles.statusItem}>
              {selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)}
            </span>
          </div>
          <div className={styles.statusRight}>
            <span className={styles.statusItem}>
              network: {networkMode}
            </span>
            <span className={styles.statusItem}>
              ttl: 30s
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

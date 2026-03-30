"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function diagnoseIssue(text: string) {
    const input = text.toLowerCase().trim();

    if (!input) return "Please describe the issue.";

    if (input.includes("overheat")) {
      return "🚨 Overheating detected.\n\nPossible causes:\n- Low coolant\n- Faulty radiator\n- Broken thermostat\n\n👉 Check coolant immediately and avoid driving.";
    }

    if (input.includes("engine")) {
      return "⚠️ Engine issue.\n\nPossible causes:\n- Spark plugs\n- Fuel system\n- Air intake\n\n👉 Get engine diagnostics soon.";
    }

    if (input.includes("brake")) {
      return "🛑 Brake issue.\n\nPossible causes:\n- Worn brake pads\n- Low brake fluid\n\n👉 Fix immediately for safety.";
    }

    return "❓ Unknown issue.\n\nTry describing the problem more clearly.";
  }

  function handleDiagnose() {
    const response = diagnoseIssue(input);
    setResult(response);
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#020617",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        background: "#020617",
        border: "1px solid #0ea5e9",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 0 20px rgba(14,165,233,0.2)"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          AutoSynex AI
        </h1>
        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          Smart Automotive Diagnostics
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your issue..."
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            background: "#020617",
            border: "1px solid #0ea5e9",
            color: "white"
          }}
        />

        <button
          onClick={handleDiagnose}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            borderRadius: "8px",
            background: "#0ea5e9",
            border: "none",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Diagnose
        </button>

        {result && (
          <div style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #0ea5e9"
          }}>
            <strong>Result:</strong>
            <p style={{ whiteSpace: "pre-line" }}>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
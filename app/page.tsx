"use client";
import { useState } from "react";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");

  const diagnose = async () => {
    setResult("Analyzing...");

    const res = await fetch("/api/diagnose", {
      method: "POST",
      body: JSON.stringify({ problem }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#e2e8f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 10 }}>
        AutoSynex AI
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: 30 }}>
        Smart Automotive Diagnostics
      </p>

      <input
        placeholder="Describe your car problem..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        style={{
          padding: 12,
          width: "100%",
          maxWidth: 400,
          borderRadius: 8,
          border: "1px solid #1e293b",
          background: "#020617",
          color: "#e2e8f0",
          marginBottom: 15,
        }}
      />

      <button
        onClick={diagnose}
        style={{
          padding: "12px 20px",
          background: "#2563eb",
          border: "none",
          borderRadius: 8,
          color: "#fff",
          width: "100%",
          maxWidth: 400,
        }}
      >
        Diagnose
      </button>

      {result && (
        <div
          style={{
            marginTop: 20,
            background: "#020617",
            border: "1px solid #1e293b",
            padding: 20,
            borderRadius: 10,
            maxWidth: 400,
          }}
        >
          <strong>Result:</strong>
          <p style={{ marginTop: 10 }}>{result}</p>
        </div>
      )}
    </main>
  );
}
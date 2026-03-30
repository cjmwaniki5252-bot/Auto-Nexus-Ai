"use client";

import { useState } from "react";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const diagnose = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        body: JSON.stringify({ problem }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      setResult("Error diagnosing issue.");
    }

    setLoading(false);
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: 20
    }}>
      <div style={{
        background: "#020617",
        border: "1px solid #1e293b",
        borderRadius: 16,
        padding: 30,
        width: "100%",
        maxWidth: 500,
        boxShadow: "0 0 40px rgba(0,0,0,0.6)"
      }}>
        <h1 style={{
          fontSize: 28,
          marginBottom: 10,
          textAlign: "center"
        }}>
          AutoSynex AI
        </h1>

        <p style={{
          fontSize: 14,
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: 20
        }}>
          Smart Automotive Diagnostics
        </p>

        <textarea
          placeholder="Describe your car problem..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          style={{
            width: "100%",
            height: 100,
            padding: 12,
            borderRadius: 10,
            border: "1px solid #1e293b",
            background: "#0f172a",
            color: "white",
            marginBottom: 15
          }}
        />

        <button
          onClick={diagnose}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {loading ? "Diagnosing..." : "Diagnose"}
        </button>

        {result && (
          <div style={{
            marginTop: 20,
            padding: 15,
            borderRadius: 10,
            background: "#020617",
            border: "1px solid #1e293b"
          }}>
            <strong>Result:</strong>
            <p style={{ marginTop: 5 }}>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
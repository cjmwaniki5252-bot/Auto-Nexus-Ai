"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleDiagnose = async () => {
    const res = await fetch("/api/diagnose", {
      method: "POST",
      body: JSON.stringify({ problem: input }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Auto Nexus AI</h1>

      <input
        placeholder="Describe car problem..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 10, width: "100%" }}
      />

      <button onClick={handleDiagnose} style={{ marginTop: 10 }}>
        Diagnose
      </button>

      <p>{result}</p>
    </main>
  );
}
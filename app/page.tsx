export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0a0f1c",
      color: "#e6f1ff",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{
        color: "#3b82f6",
        fontSize: "28px",
        marginBottom: "10px"
      }}>
        🚗 Auto Nexus AI
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
        Smart AI-powered automotive diagnostics platform
      </p>

      <div style={{
        background: "#111827",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px"
      }}>
        <h3 style={{ color: "#3b82f6" }}>🔍 Diagnose Vehicle</h3>
        <p style={{ color: "#9ca3af" }}>
          Enter symptoms or dashboard light to get AI diagnosis.
        </p>
      </div>

      <div style={{
        background: "#111827",
        padding: "15px",
        borderRadius: "10px"
      }}>
        <h3 style={{ color: "#3b82f6" }}>📊 Vehicle Insights</h3>
        <p style={{ color: "#9ca3af" }}>
          View common issues by manufacturer and year.
        </p>
      </div>

    </main>
  );
}
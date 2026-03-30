export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0f1c",
      color: "#ffffff",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "#4da6ff" }}>
        Auto Nexus AI
      </h1>

      <p style={{ color: "#9db4d6" }}>
        AI-powered automotive diagnostics platform
      </p>

      <div style={{
        marginTop: 30,
        padding: 20,
        background: "#111827",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
      }}>
        <h2 style={{ color: "#4da6ff" }}>
          Diagnose Your Vehicle
        </h2>

        <input
          placeholder="Describe your car problem..."
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
            borderRadius: 6,
            border: "none",
            outline: "none",
            background: "#1f2937",
            color: "#fff"
          }}
        />

        <button style={{
          marginTop: 15,
          padding: 10,
          width: "100%",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer"
        }}>
          Diagnose
        </button>
      </div>
    </main>
  );
}
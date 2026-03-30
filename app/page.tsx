const handleDiagnose = async () => {
  if (!input || input.trim() === "") {
    setResult("Please enter a problem first.");
    return;
  }

  try {
    const res = await fetch("/api/diagnose", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ problem: input })
    });

    const data = await res.json();

    setResult(data.result || "No result returned.");
  } catch (err) {
    setResult("Network error. Check your connection.");
  }
};
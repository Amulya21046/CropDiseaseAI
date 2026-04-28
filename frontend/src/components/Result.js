import React from "react";

function Result({ data }) {
  const measures = data.measures || [];
  const color = data.color_analysis || {};

  return (
    <div className="card result">
      <h2>🧬 Scientific Detection Report</h2>

      <div className="resultGrid">
        <div className="miniCard green">
          <h3>🌿 Disease Name</h3>
          <p>{data.disease || "Not detected"}</p>
        </div>

        <div className="miniCard cyan">
          <h3>🔬 Scientific Name</h3>
          <p>{data.scientific_name || "N/A"}</p>
        </div>

        <div className="miniCard blue">
          <h3>📊 Confidence</h3>
          <p>{data.confidence || 0}%</p>
        </div>

        <div className="miniCard red">
          <h3>⚠️ Severity</h3>
          <p>{data.severity || "N/A"}</p>
        </div>

        <div className="miniCard orange">
          <h3>🚨 Risk Score</h3>
          <p>{data.risk_score || 0}%</p>
        </div>

        <div className="miniCard purple">
          <h3>💡 Brightness</h3>
          <p>{color.brightness || 0}</p>
        </div>
      </div>

      <div className="infoBox">
        <h3>🧫 Cause</h3>
        <p>{data.cause || "Cause not available."}</p>
      </div>

      <div className="infoBox">
        <h3>💊 Prevention & Treatment Measures</h3>
        {measures.length > 0 ? (
          measures.map((m, i) => <p key={i}>✅ {m}</p>)
        ) : (
          <p>No measures available.</p>
        )}
      </div>

      <div className="infoBox">
        <h3>🎨 Leaf Color Intelligence</h3>
        <p>Green Area: {color.green_ratio || 0}%</p>
        <p>White Area: {color.white_area || 0}%</p>
        <p>Yellow Area: {color.yellow_area || 0}%</p>
        <p>Brown Area: {color.brown_area || 0}%</p>
        <p>Dark Area: {color.dark_area || 0}%</p>
        <p>Rust Area: {color.rust_area || 0}%</p>
      </div>

      <div className="infoBox">
        <h3>📌 Farmer Advice</h3>
        <p>{data.advice}</p>
      </div>
    </div>
  );
}

export default Result;
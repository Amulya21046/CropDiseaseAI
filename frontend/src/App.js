import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import Result from "./components/Result";
import "./styles.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <h1>🌿 Crop Disease Detection AI</h1>

      <UploadImage setResult={setResult} />

      {result && <Result data={result} />}
    </div>
  );
}

export default App;
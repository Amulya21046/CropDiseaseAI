import React, { useState } from "react";
import axios from "axios";

function UploadImage({ setResult }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setError("Please upload only image files like JPG, JPEG, or PNG.");
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setError("");
    setResult(null);
  };

  const upload = async () => {
    if (!file) {
      setError("Please choose a leaf image first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://cropdiseaseai.onrender.com/predict",
        formData
      );

      setResult(res.data);
      setError("");
    } catch {
      setError("Backend not responding. Please check deployed backend.");
    }

    setLoading(false);
  };

  return (
    <div className="uploadCard">
      <h2>📸 Leaf Scan Chamber</h2>
      <p>Upload a crop leaf image for disease intelligence analysis.</p>

      {error && <p className="error">{error}</p>}

      <label className="bigFileButton">
        📁 Choose Leaf Image
        <input type="file" accept="image/*" onChange={handleFile} hidden />
      </label>

      {preview && (
        <div className="previewBox">
          <img src={preview} alt="leaf preview" className="preview" />
        </div>
      )}

      <button className="detectButton" onClick={upload}>
        {loading ? "🔬 Analyzing..." : "🔍 Detect Disease"}
      </button>
    </div>
  );
}

export default UploadImage;
import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("highlight");
  const [file, setFile] = useState(null);
  const [resources, setResources] = useState([]);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const fetchResources = async () => {
    try {
      const res = await axios.get(
        `https://aivsc-backend.onrender.com/api/resources/category/${category}`
      );
      setResources(res.data);
    } catch (err) {
      console.error("Failed to fetch resources", err);
    }
  };

  useEffect(() => {
    fetchResources();
  }, [category]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("file", file);

    try {
      await axios.post("https://aivsc-backend.onrender.com/api/resources/upload", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("✅ File uploaded successfully");
      setTitle("");
      setFile(null);
      fetchResources(); // refresh after upload
    } catch (error) {
      console.error(error);
      setMessage("❌ Upload failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://aivsc-backend.onrender.com/api/resources/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setMessage("🗑️ File deleted");
      fetchResources(); // refresh after delete
    } catch (err) {
      console.error("Delete failed", err);
      setMessage("❌ Delete failed");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-3">Upload Study Resource</h3>
      <form onSubmit={handleUpload}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="highlight">Highlight</option>
            <option value="worksheet">Worksheet</option>
            <option value="questionBank">Question Bank</option>
            <option value="fullForm">Full Form</option>
            <option value="mockTest">Mock Test</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">File (PDF):</label>
          <input
            className="form-control"
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button className="btn btn-success" type="submit">
          Upload
        </button>
      </form>

      {message && <div className="alert alert-info mt-3">{message}</div>}

      <hr />

      <h4 className="text-secondary">Uploaded Files ({category})</h4>
      <ul className="list-group">
        {resources.map((res) => (
          <li
            key={res._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{res.title}</strong>{" "}
              <span className="text-muted">
                ({new Date(res.uploadedAt).toLocaleDateString()})
              </span>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(res._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

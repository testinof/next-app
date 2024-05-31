"use client";
import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

export default function Sender() {
  const [emails, setEmails] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const emailData = results.data.map((row) => Object.values(row)[0]);
          setEmails(emailData);
        },
      });
    } else {
      alert("Please upload a valid .csv file");
    }
  };

  const send = async () => {
    try {
      setStatus("sending...");
      const response = await axios.post(
        "https://next-app-f60s.onrender.com/api/",
        {
          emails,
        }
      );
      console.log(response.data);
      setStatus("Messages sent successfully!");
    } catch (error) {
      setStatus(
        `Failed to send messages: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div>
        <h1>Upload CSV and Convert to JSON</h1>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        {emails && (
          <div>
            <h2>Converted JSON:</h2>
            <ul>
              {emails.map((email, index) => {
                return <li key={index}>{email}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => send()}
      >
        load
      </button>
      {status && <p style={{ color: "green" }}>{status}</p>}
    </div>
  );
}

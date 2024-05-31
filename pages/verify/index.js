"use client";
import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

export default function Verify() {
  const [emails, setEmails] = useState(null);
  const [status, setStatus] = useState("");
  const [verified, setVerified] = useState(null);
  const [unique, setUnique] = useState(null);

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

  console.log(verified);

  const verify = async () => {
    try {
      setStatus("sending...");
      const response = await axios.post(
        "https://next-app-f60s.onrender.com/api/verify",
        {
          emails,
        }
      );
      const inputDataArray = response.data.info.map((item) => item.inputData);
      const uniqueEmails = Array.from(new Set(inputDataArray));
      setVerified(uniqueEmails);
      setStatus("Items has been verified successfully");
    } catch (error) {
      setStatus(
        `Failed to send messages: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  const downloadCSV = () => {
    if (verified) {
      const csvData = Papa.unparse(verified.map((email) => ({ email })));
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "verified_emails.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div>
        <h1>Upload CSV and Convert to JSON</h1>
        <h3 style={{ color: "blue", padding: "20px" }}>Verify/Validate</h3>
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
        onClick={() => verify()}
        style={{ margin: "20px" }}
      >
        verify
      </button>
      {verified && (
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => downloadCSV()}
          style={{ margin: "20px" }}
        >
          Download CSV
        </button>
      )}
      {status && <p style={{ color: "green" }}>{status}</p>}

      {verified && (
        <>
          <p>Verified Emails</p>
          <ul>
            {verified?.map((email) => {
              return <li key={email}>{email}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

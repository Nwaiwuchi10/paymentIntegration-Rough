import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        const { eventId, eventTitle } = parsedData;

        // API call to create participant
        const response = await axios.post(
          "http://localhost:4100/participants",
          {
            eventId,
            participant: "userObjectId", // Replace with logged-in user ID
            policy: true,
          }
        );
        alert(`Successfully registered for ${eventTitle}`);
      } catch (error) {
        console.error("Error registering for event:", error);
        alert("Registration failed.");
      }
    }
  };

  const handleError = (error) => {
    console.error("QR Scan Error:", error);
  };

  return (
    <div>
      <h1>QR Code Event Participation</h1>
      <QrReader
        delay={300}
        style={{ width: "100%" }}
        onError={handleError}
        onResult={handleScan}
      />
      {scanResult && <p>Scanned Data: {JSON.stringify(scanResult)}</p>}
    </div>
  );
};

export default QRScanner;

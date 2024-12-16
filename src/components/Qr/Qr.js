import axios from "axios";
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import QRCode from "react-qr-code";
const QRGenerator = () => {
  const eventId = "674f04b88bc228ada7745469";
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4100/events/all/${eventId}`
        );
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    if (eventId) fetchEventData();
  }, [eventId]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>QR Event Testing</h1>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          // maxWidth: 64,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {eventData ? (
          <QRCode
            value={JSON.stringify({
              eventId: eventData.eventId,
              eventTitle: eventData.eventTitle,
            })}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;

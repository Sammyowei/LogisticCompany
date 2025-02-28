import React from "react";

const TrackShipment = ({ onClose, parcel }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#f1c40f"; // Yellow
      case "In Transit":
        return "#3498db"; // Blue
      case "Delivered":
        return "#2ecc71"; // Green
      case "Cancelled":
        return "#e74c3c"; // Red
      case "Detained":
        return "#9b59b6"; // Purple
      default:
        return "#7f8c8d"; // Gray
    }
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    },
    modal: {
      width: "600px",
      height: "80vh",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },
    header: {
      textAlign: "center",
      backgroundColor: "#2c3e50",
      color: "#fff",
      padding: "15px",
      fontSize: "20px",
      fontWeight: "bold"
    },
    content: {
      flex: 1,
      overflowY: "auto",
      padding: "20px"
    },
    section: {
      marginBottom: "15px",
      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "6px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    },
    title: { fontSize: "16px", fontWeight: "bold", color: "#34495e", marginBottom: "5px" },
    text: { margin: "3px 0", color: "#555" },
    status: { textAlign: "center", fontSize: "18px", fontWeight: "bold", color: getStatusColor(parcel?.status) },
    notice: { textAlign: "center", color: "#e74c3c", fontWeight: "bold", marginTop: "10px" },
    closeButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      width: "100%",
      borderRadius: "0 0 8px 8px"
    }
  };
    
    
    console.log(parcel)

    function formatDate(isoString) {
        const date = new Date(isoString);
    
        const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date)
            .replace(/(\d+)(\s)/, '$1, '); // Adds comma after day
    
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
    
        return `${formattedDate} at ${formattedTime}`;
    }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>TRACK SHIPMENT RESULT</div>
        <div style={styles.content}>
          <section style={styles.section}>
            <h2 style={styles.title}>Receiver's Details</h2>
                      <p style={styles.text}><strong>Name:</strong> { parcel?.receiverName || "Name"}</p>
                      <p style={styles.text}><strong>Email:</strong> { parcel?.receiverEmail || "email@email.com"}</p>
                      <p style={styles.text}><strong>Contact:</strong> { parcel?.receiverPhone || "+123467890"}</p>
                      <p style={styles.text}><strong>Address:</strong> { parcel?.destination || "Colombia"}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.title}>Shipment Status</h2>
            <p style={styles.status}>{parcel?.status || "Unknown"}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.title}>Shipment Date/Time</h2>
                      <p style={styles.text}><strong>Shipment Date:</strong> { formatDate(parcel?.created_at|| "2025-02-24T10:00:00Z")}</p>
                      <p style={styles.text}><strong>Location:</strong> { parcel?.origin}</p>
                      <p style={styles.text}><strong>Estimated Date:</strong> { formatDate(parcel?.estimated_delivery || "2025-02-24T10:00:00Z")}</p>
                      <p style={styles.text}><strong>Destination:</strong> { parcel?.destination}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.title}>Sender's Details</h2>
            <p style={styles.text}><strong>Name:</strong>{ parcel?.senderName || "Name"} </p>
            <p style={styles.text}><strong>Email:</strong> { parcel?.senderEmail || "email"}</p>
            <p style={styles.text}><strong>Contact:</strong> { parcel?.senderPhone || "Phone"}</p>
            <p style={styles.text}><strong>Address:</strong> { parcel?.origin || "location"}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.title}>Shipment Facts</h2>
            <p style={styles.text}><strong>Item Description:</strong> A parcel sealed in a confined box.</p>
            <p style={styles.text}><strong>Weight:</strong> 2kg</p>
            <p style={styles.text}><strong>Tracking No:</strong> { parcel?.tracking_number || "Name"} </p>
            <p style={styles.text}><strong>Sender:</strong>{ parcel?.senderName || "Name"} </p>
            <p style={styles.text}><strong>Current Location:</strong> { parcel?.current_location || "current_location"} </p>
          </section>

          <p style={styles.notice}>Notice: Please view your email for more information.</p>
        </div>
        <button style={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TrackShipment;

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Footer() {
  const {phone} = useContext(AppContext);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "0.3rem",
        width: "auto",
        marginTop: "10px",
        textAlign: "left",
      }}
    >
      <h2>Footer</h2>
      <p>Phone: {phone}</p>
    </div>
  );
}

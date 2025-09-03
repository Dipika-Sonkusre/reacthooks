import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const { phone, name } = useContext(AppContext);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "auto",
        textAlign: "left",
      }}
    >
      <h2>Contact</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

import React from 'react'
import Contact from './Contact'

export default function Profile() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "auto",
        textAlign: "left",
      }}
    >
      <h2>Profile</h2>
      <Contact />
    </div>
  );
}

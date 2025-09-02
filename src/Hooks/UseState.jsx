import React, { useState } from "react";

export default function UseState() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    color: "red",
    year: "2023",
  });

  const handleChangeColor = () => {
    setCar((prev) => ({
      ...prev,
      color: "blue",
    }));
  };

  const handleChangeColor2 = (newColor = "Orange") => {
    setCar((prev) => ({
      ...prev,
      color: newColor,
    }));
  };

  return (
    <>
      <h1>
        This is my Car {car.brand} with model {car.model}.
      </h1>
      <h2>My Car Color is {car.color}</h2>

    <div style={{ display: 'flex',justifyContent:'center',gap:'10px',marginTop:'20px'}}>
      <button onClick={handleChangeColor}>Set To Blue</button>
      <button onClick={() => handleChangeColor2("Yellow")}>
        Set To Yellow
      </button>
    </div>
    </>
  );
}

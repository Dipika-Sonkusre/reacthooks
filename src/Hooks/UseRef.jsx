import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState(0);
  const countRef = useRef(0);

  // useRef does not cause re-render when its value changes
  useEffect(() => {
    countRef.current = (countRef.current || 0) + 1;
  });

  // second useRef example
  const inputRef = useRef();

  const buttonClick = () => {
    console.log(inputRef.current);
    inputRef.current.style.border = "1px solid blue";
  };

  return (
    <div className="container">
      <button onClick={() => setValue((prevVal) => prevVal - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prevVal) => prevVal + 1)}>+1</button>
      <h1>Render Count: {countRef.current}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input type="text" ref={inputRef} />
        <button onClick={buttonClick}>Click Here</button>
      </div>
    </div>
  );
}

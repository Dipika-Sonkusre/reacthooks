import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  // Runs on Every Render
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  });

  // Runs only onces
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // },[]);

  // Runs when dependency changes
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 2000);
  // },[count]);

  return <h1> It will Render {count} times</h1>;
}

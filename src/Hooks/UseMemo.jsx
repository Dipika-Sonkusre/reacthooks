import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  //   function CubeNum(num) {
  //     console.log("Cube Num");
  //     return Math.pow(num, 3);
  //   }

  //   const result = CubeNum(number);

  // useMemo to memoize the value so that it does not re-compute on every render
  // only re-compute when the dependency changes
  const result = useMemo(() => {
    console.log("Calculating Done!");
    return Math.pow(number, 3);
  }, [number]);

  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Cube of the number: {result}</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter ++
      </button>
      <h1>{counter}</h1>
    </div>
  );
}

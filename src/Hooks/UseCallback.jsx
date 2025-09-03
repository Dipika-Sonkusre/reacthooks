import React, { useCallback, useState } from "react";
import Header from "../component/Header";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const newFun = useCallback(() => {},[]);

  return (
    <div className="container">
      <Header newFun={newFun}/>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment by 1
      </button>
    </div>
  );
}

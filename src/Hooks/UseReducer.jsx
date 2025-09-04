import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      return { count: state.count + 1 };
    }
    case "decrease": {
      return { count: state.count - 1 };
    }
    case "input": {
      return { count: action.payload };
    }
    default: {
      return state;
    }
  }

  //   if (action.type === "increase") {
  //     return { count: state.count + 1 };
  //   } else if (action.type === "decrease") {
  //     return { count: state.count - 1 };
  //   } else {
  //     return state;
  //   }
};
export default function UseReducer() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <br />

      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}

// Note:
// useReducer is similar to useState, But instead of providing state and setter function. It provide state and dispatch function

//useReducer Hook accept two arguments:
// Reducer function
// initial state
// and returns: CUrrent state and dispatch method

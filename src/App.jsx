import "./App.css";
import ContextProvider from "./context/AppContext";
import UseContext from "./Hooks/UseContext";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <section>
      {/* <UseState /> <br /> */}
      {/* <UseEffect /> <br /> */}
      <UseRef />
    </section>
  );
}

export default App;

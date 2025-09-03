import "./App.css";
import Footer from "./component/Footer";
import Profile from "./component/Profile";
import ContextProvider from "./context/AppContext";
import UseCallback from "./Hooks/UseCallback";

function App() {
  return (
    <section>
      {/* <UseState /> <br /> */}
      {/* <UseEffect /> <br /> */}
      {/* <UseRef /> <br /> */}
      {/* <UseMemo /> <br /> */}
      {/* <UseCallback /> */}

      <div
        style={{
          border: "1px solid black",
          padding: "1rem",
          width: "500px",
        }}
      >
        <ContextProvider>
          <Profile />
          <Footer />
        </ContextProvider>
      </div>
    </section>
  );
}

export default App;

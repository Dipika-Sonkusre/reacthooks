/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 123456789";
  const name = "Dipika Sonkusre";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

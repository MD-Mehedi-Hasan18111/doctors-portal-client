import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = useFirebase();

    return (
        <Context.Provider value={allContexts}>
            {children}
        </Context.Provider>
);
};

export default AuthProvider;

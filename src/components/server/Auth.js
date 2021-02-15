import { createContext, useEffect, useState } from "react";
import firebase from "./Firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((currentUser) => setCurrentUser(currentUser));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

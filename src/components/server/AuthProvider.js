import { createContext, useEffect, useState } from "react";
import firebase from "./Firebase";

export const AuthProvider = createContext(null);

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthProvider.Provider value={user}>{children}</AuthProvider.Provider>;
};

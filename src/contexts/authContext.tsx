import { useEffect, createContext, useContext, useState } from "react";
import firebase from "../firebase";
import createAuthenticator from "../auth";

export const AuthContext = createContext({});
export const useAuth: any = () => useContext(AuthContext);

const auth = createAuthenticator(firebase);

export const signInWithGoogle = () => {
  auth("google");
};

export const signout = () => firebase.auth().signOut();

export const AuthProvider = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setAuthenticating(false);
      console.log(user);

      if (user) {
        return setUser(user);
      }

      setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authenticating, signInWithGoogle, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initialzeAuthentication from "../Firebase/firebase.initialise";

initialzeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {});
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  return { user, error, signInUsingGoogle, logout };
};

export default useFirebase;

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoader(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post("https://save-tree-org-server.vercel.app/jwt", userData, {
            withCredentials: true,
          })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userData = {
    user,
    setUser,
    createWithEmail,
    login,
    googleLogin,
    logout,
    loader,
  };

  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;

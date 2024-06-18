import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    // return singInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userInfo = { email: currentUser?.email };
      // console.log("current user",currentUser);
      if (currentUser) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        console.log("object");
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);



  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logOut,
    singInUser,
    googleSingIn,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

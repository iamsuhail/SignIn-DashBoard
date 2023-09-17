import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9Rd5QJ4f9ma1Jfipkg3tRgFuztGaK-i4",
  authDomain: "signin-auth-d40bb.firebaseapp.com",
  projectId: "signin-auth-d40bb",
  storageBucket: "signin-auth-d40bb.appspot.com",
  messagingSenderId: "374599094235",
  appId: "1:374599094235:web:4aa8a607793a6c7e8661fe",
  measurementId: "G-5MW5Y2EFWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      return result.user; // Return the user data as a resolved value of the Promise
    })
    .catch((error) => {
      console.log("Google sign-in error:", error);
      throw error; // Re-throw the error for handling in the component
    });
};

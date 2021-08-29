import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";
// import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const config = {
  apiKey: "AIzaSyDCuieaVQ9wkN_2c6hztJhdP6P-TmCB0hQ",
  authDomain: "ecommerce-app-a27e2.firebaseapp.com",
  projectId: "ecommerce-app-a27e2",
  storageBucket: "ecommerce-app-a27e2.appspot.com",
  messagingSenderId: "391089413524",
  appId: "1:391089413524:web:21f130a2152d8578004381",
  measurementId: "G-WVQVPWE4ND",
};

export const app = initializeApp(config);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore();

export const signInWithGoogle = signInWithPopup;

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new app.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCuieaVQ9wkN_2c6hztJhdP6P-TmCB0hQ",
  authDomain: "ecommerce-app-a27e2.firebaseapp.com",
  projectId: "ecommerce-app-a27e2",
  storageBucket: "ecommerce-app-a27e2.appspot.com",
  messagingSenderId: "391089413524",
  appId: "1:391089413524:web:21f130a2152d8578004381",
  measurementId: "G-WVQVPWE4ND",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      // console.log("user set", userRef);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

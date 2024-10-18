import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrMReyPCy3tqVNBUBUxF0AAkVfOcrFGdU",
  authDomain: "learnlingo-a826c.firebaseapp.com",
  projectId: "learnlingo-a826c",
  storageBucket: "learnlingo-a826c.appspot.com",
  messagingSenderId: "470886674302",
  appId: "1:470886674302:web:1c9cc17115e18aaa8a4d2f",
  measurementId: "G-Q9TN31YRXR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("No user is logged in.");
  }
});

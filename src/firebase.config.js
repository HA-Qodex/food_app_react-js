import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUCT-j_Yv1Q1fYID-kn6gpWwKN_ukMkHg",
  authDomain: "foodapp-365b6.firebaseapp.com",
  projectId: "foodapp-365b6",
  storageBucket: "foodapp-365b6.appspot.com",
  messagingSenderId: "341243173808",
  appId: "1:341243173808:web:c1d9adbf6f231278429475",
  measurementId: "G-VXKTFZME9H",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

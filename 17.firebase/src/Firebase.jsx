import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxKncHLbVGVjAVy210cjd8VTyDxAo0GJM",
  authDomain: "fir-education-913c2.firebaseapp.com",
  projectId: "fir-education-913c2",
  storageBucket: "fir-education-913c2.firebasestorage.app",
  messagingSenderId: "571341978995",
  appId: "1:571341978995:web:3e857f500351b93f375906",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

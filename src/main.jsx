import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./components/context/UserContextProvider.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp9VNSj6png3-d5HoInU5qIUsH4wz8giA",
  authDomain: "react-gamestation-ecommerce.firebaseapp.com",
  projectId: "react-gamestation-ecommerce",
  storageBucket: "react-gamestation-ecommerce.appspot.com",
  messagingSenderId: "769851615249",
  appId: "1:769851615249:web:02f61c479382b73de669b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);

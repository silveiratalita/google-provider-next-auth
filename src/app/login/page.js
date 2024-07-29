"use client";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  FacebookAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  getAdditionalUserInfo,
  getRedirectResult,
  getIdToken,
  auth,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { getApps, initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXMGf7ow_GIPG55k9cpdBhafOzzZede5o",
  authDomain: "cardapio-digital-llm.firebaseapp.com",
  projectId: "cardapio-digital-llm",
  storageBucket: "cardapio-digital-llm.appspot.com",
  messagingSenderId: "635605077664",
  appId: "1:635605077664:web:fe785085d30d703b5483c5",
};

export default function Page() {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    auth.languageCode = "pt";

    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          resultado = result;
          resultado = result;
          const credential = GoogleAuthProvider.credentialFromResult(result);
        }
      })
      .catch((error) => {
        console.error("Erro ao obter resultado de redirecionamento:", error);
      });
  }, [auth, db]);

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    // .then(async (user) => {
    //   console.log("aquiiiii", user);
    //   const idtoken = await auth.currentUser.getIdToken();
    //   return user;
    // })
    // .catch((error) => {
    //   console.erlistor("Erro ao fazer login com Google:", error);
    // });
    console.log("USERRR", JSON.stringify(user));
  };

  return (
    <div>
      {JSON.stringify(auth?.currentUser)}
      {}
      <button onClick={loginGoogle}>Login com Google</button>
    </div>
  );
}
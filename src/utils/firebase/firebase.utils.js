import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Cg743LGGGYQDF7n8Zmff4SQFfDEvDuU",
  authDomain: "react-commerce-db-bd7bb.firebaseapp.com",
  projectId: "react-commerce-db-bd7bb",
  storageBucket: "react-commerce-db-bd7bb.appspot.com",
  messagingSenderId: "557435069965",
  appId: "1:557435069965:web:58313861178c5c400dd744",
}

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (err) {
      console.log("error creating user: ", err.message)
    }
  }

  return userDocRef
}

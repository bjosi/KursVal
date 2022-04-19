// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';

//login from this video
//https://www.youtube.com/watch?v=_Kv965pA-j8&list=PLqFvlDFoiZ-3HoHuYfqc4SrId1JbrtTnA
// email: test123@gmail.com
//lösen: test123test123


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDze3cYvlE4uJRqIGght6_9ZQjyJ4HDuWw",
    authDomain: "logicism-auth-d0c0e.firebaseapp.com",
    projectId: "logicism-auth-d0c0e",
    storageBucket: "logicism-auth-d0c0e.appspot.com",
    messagingSenderId: "898737315847",
    appId: "1:898737315847:web:91b94ad2878d9eab584aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

//custom Hook
export function useAuth() {

    const [currentUser, setCurrentUser] = useState();

    useEffect(
        () => {
           const unsub=  onAuthStateChanged(auth, user => { setCurrentUser(user) });
            return unsub;
        }, []
    )

    return currentUser;

}

export function logout() {
    return signOut(auth);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
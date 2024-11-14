import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup,onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const MainLayout = () => {
    const [user, setUser] = useState(null);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Google Login
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
    }

    // Github Login
    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => setUser(result.user))
    }

    // email password Sign/ login
    const handleSignUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }

    const handleLogout  = () =>{
        signOut(auth)
        .then(res=> console.log(res))
    }


    useEffect(()=>{
        console.log("user state:",user);
    },[user])

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
            // if (user) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = user.uid;
            //   // ..
            // } else {
            //   // User is signed out
            //   // ..
            // }

            });

            return ()=>{
                unsubscribe();
            }
    },[])


    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        handleLogout,
        handleSignUp
    }

    return (
        <div>
            <authContext.Provider value={authData}>
                <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;

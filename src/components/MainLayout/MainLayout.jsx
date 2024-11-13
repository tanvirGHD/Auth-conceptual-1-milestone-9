import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const authContext = createContext();

const MainLayout = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Google Login
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => console.log(result))
    }

    // Github Login
    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => console.log(result))
    }

    const authData = {
        handleGoogleLogin,
        handleGithubLogin
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
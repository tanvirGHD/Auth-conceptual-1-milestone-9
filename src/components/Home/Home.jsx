

import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";


const Home = () => {

    const contextValue = useContext(authContext)
    const {handleGoogleLogin, handleGithubLogin,handleLogout} = contextValue;
    




    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGithubLogin}>Github Login</button>
            <button onClick={handleLogout}>Google Logout</button>
        </div>
    );
};

export default Home;
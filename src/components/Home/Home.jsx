

import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";


const Home = () => {

    const contextValue = useContext(authContext)
    console.log(contextValue);
    const {handleGoogleLogin, handleGithubLogin} = contextValue;
    




    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGithubLogin}>Github Login</button>
        </div>
    );
};

export default Home;
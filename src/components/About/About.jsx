import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';


const About = () => {
    const {handleGoogleLogin} = useContext(authContext)
    return (
        <div>
            I am a About
            <button onClick={handleGoogleLogin}>Google login</button>
        </div>
    );
};

export default About;
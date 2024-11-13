import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => console.log(result))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
        </div>
    );
};

export default Home;
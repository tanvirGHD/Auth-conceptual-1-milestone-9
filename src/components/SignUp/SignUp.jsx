import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const SignUp = () => {

    const {handleSignUp} = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if(password.length < 6){
            alert('Password must be 6 character')
            return;
        }
        if(password != conPassword){
            alert("Password din't match");
            return
        }
        console.log(email, password, conPassword);
        handleSignUp(email, password)
    };

    return (
        <div className="border-purple-800 rounded-xl p-4">
            <h2 className="text-2xl font-bold text-center">SignUp</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered w-full max-w-xs mb-4"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="input input-bordered w-full max-w-xs mb-4"
                />
                <input
                    type="password"
                    name="conPassword"
                    placeholder="Confirm Password"
                    required
                    className="input input-bordered w-full max-w-xs mb-4"
                />
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;

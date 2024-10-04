import { useState } from "react";
import Header from "./Header";

const Login = () => {

    // to handle the state of form
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className="relative">
            <Header/>
            <div>
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="logo"/>
            </div>
            <form className="absolute w-3/12 top-48 bg-black px-16 py-8 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
                <h1 className="font-semibold text-3xl px-3 py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />
                {!isSignInForm && <input 
                    type="Mobile Number" 
                    placeholder="Mobile Number" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />}
                <button className="p-3 m-3 bg-red-600 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p 
                    className="py-4 px-2 cursor-pointer"
                    onClick={toggleSignInForm}
                >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member, Sign In Now..."}</p>
            </form>
        </div>
    )
};

export default Login;
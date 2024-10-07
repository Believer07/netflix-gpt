import { useRef, useState } from "react";
import Header from "./Header";
import {checkValideData} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {

    // to handle the state of form
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the form data
        const message = checkValideData(email.current.value, password.current.value);
        setErrorMessage(message)
        console.log(message);

        // if message is there means either email or password anything is wrong
        if(message) return;

        // if message is null means user is authenticated
        // only then sign in/ sign up

        // check this is sign in form or sign up form
        if(!isSignInForm){
            // sign up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: email.current.value.split("@")[0],
                    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4ip4Pn1UDDc1GMlJMTGl3ZPXCiKrHrGsqOK2IYlrfDQ3cCgJ7xJ4VCvTSJm15AHMaLs&usqp=CAU"
                }).then(()=>{
                    // profile updated
                    console.log("displayname", email.current.value.split("@")[0]);

                    // fixing the bug of updating the photoURL with auth.currentUser not with user(which we get from userCredential.user) because it doesn't have the updated values
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid, email, displayName, photoURL}));
                    navigate("/browse");
                }).catch((error) => {
                    // an error occurred
                    setErrorMessage(error.message);
                })

                console.log("sign up",user);
                // navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            // sign in form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("sign in",user);
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        }

    };



    return (
        <div className="relative">
            <Header/>
            <div>
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="logo"/>
            </div>
            <form onSubmit={(e) => {e.preventDefault()}} className="absolute w-3/12 top-48 bg-black px-16 py-8 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
                <h1 className="font-semibold text-3xl px-3 py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />
                {!isSignInForm && <input 
                    type="Mobile Number" 
                    placeholder="Mobile Number" 
                    className="p-3 m-3 w-full bg-[#171716] rounded-lg border-[1px] border-slate-50"
                />}
                <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
                <button 
                    className="p-3 m-3 bg-red-600 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p 
                    className="py-4 px-2 cursor-pointer"
                    onClick={toggleSignInForm}
                >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member, Sign In Now..."}</p>
            </form>
        </div>
    )
};

export default Login;
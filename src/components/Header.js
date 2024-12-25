import { signOut } from "firebase/auth";
import Logonetflix from "../images/Logonetflix.png"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // find the user from the store by subscribing to the store
    const user = useSelector(store => store.user);
    console.log("header user",user)
    // not handling the sign out wala removeUser from redux because onAuthStateChanged func of firebase handles that
    const handleSignOut = () => {
        signOut(auth).then(()=>{
            // sign-out successful
            // navigate("/")
        }).catch((error) => {
            // an error occurred
        });
    }

    // moved this from body.js to here see 30. point on notes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                // user is signed in
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                navigate("/browse");
            }else{
                // user is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // unsubscribe when component unmounts
        return () => unsubscribe();

    }, []);

    const showGptSearchLangOption = useSelector(store => store.gpt.showGptSearch);

    const handleGptSearchClick = ()=>{
        // so till now we have diff slice for gptsearch toggle, now from here we will dispatch the action
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen z-20 px-24 py-3 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between ">
            <img 
                className="w-44 mx-auto md:mx-0"
                src={Logonetflix} alt="NetflixLogo"
            />
            {user && <div className="flex">
                {showGptSearchLangOption && <select className="p-2 mb-4 bg-gray-600 text-white" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier}>{lang.name}</option>)}
                    {/* <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option> */}
                </select>}
                <button className="mb-4 mx-2 w-28 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearchLangOption ?"Home Page":"GPT Search"}</button>
                <img
                className="w-10 h-10"
                    alt="usericon"
                    src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                    // src={user.photoURL}
                />
                <button 
                    className="font-bold text-white m-4 text-xl"
                    onClick={handleSignOut}    
                >Sign Out</button>
            </div>}
        </div>
    )
};

export default Header;
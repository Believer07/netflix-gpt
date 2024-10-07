import { signOut } from "firebase/auth";
import Logonetflix from "../images/Logonetflix.png"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    // find the user from the store by subscribing to the store
    const user = useSelector(store => store.user);
    console.log("header user",user)
    // not handling the sign out wala removeUser from redux because onAuthStateChanged func of firebase handles that
    const handleSignOut = () => {
        signOut(auth).then(()=>{
            // sign-out successful
            navigate("/")
        }).catch((error) => {
            // an error occurred
        });
    }

    return (
        <div className="absolute w-screen px-24 py-6 bg-gradient-to-b from-black flex justify-between">
            <img 
                className="w-44"
                src={Logonetflix} alt="NetflixLogo"
            />
            {user && <div className="flex">
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
import Logonetflix from "../images/Logonetflix.png"

const Header = () => {
    return (
        <div className="absolute px-24 py-6 bg-gradient-to-b from-black">
            <img 
                className="w-44"
                src={Logonetflix} alt="NetflixLogo"
            />
        </div>
    )
};

export default Header;
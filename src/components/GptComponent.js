import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptComponent = () => {
    return (
        <div className="">
            <div>
                <img className="absolute -z-10" src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="logo"/>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
};

export default GptComponent;
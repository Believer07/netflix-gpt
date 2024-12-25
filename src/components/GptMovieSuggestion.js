import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {

    const gpt = useSelector(store => store.gpt);
    const {movieResults, movieNames} = gpt;

    if(!movieNames)
        return null;



    return (
        <div className="p-4 m-4 bg-black text-white">
            {movieNames}
        </div>
    )
};

export default GptMovieSuggestion;
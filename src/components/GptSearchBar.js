import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    // search movie in tmdb db
    const searchMovieTmdb = async (movieName) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // make an api call to gpt api and get the movie results
        
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Kbhi khushi kbhi gam, koi mill gya"
        
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content:  gptQuery}],
            model: 'gpt-4o-mini',
        });

        if(!gptResults.choices){
            // TODO: Error handling
        }

        // this below will have 5 movie recommendations
        console.log(gptResults.choices[0]?.message.content);

        // here we will get the array of movies
        const gptMovies = gptResults.choices[0]?.message.content.split(",");

        // for each movie i'll search TMDB API
        const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie));

        //IMP CONCEPT -  see here in data we will get 5 promises because `searchMovieTmdb` function is an async func

        // see point 73 of notes

        const tmdbResults = await Promise.all(promiseArray);

        console.log(tmdbResults);

        // dispatch an action to add tmdbResults to gptMovies
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }

    return (
        <div className="pt-[10%] flex justify-center z-10">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
};

export default GptSearchBar;
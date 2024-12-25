import { useEffect } from "react";
import { GET_NOW_PLAYING_MOVIES_URI, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(sotre => sotre.movies.nowPlayingMovies);



    const getNowPlayingMovies = async () => {
        const data = await fetch(
            GET_NOW_PLAYING_MOVIES_URI,
            API_OPTIONS
        );
        const json = await data.json();
        console.log("movies data = ",json.results);

        // dispatch an action
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
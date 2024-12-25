import { useEffect } from "react";
import { GET_POPULAR_MOVIES_URI, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(
            GET_POPULAR_MOVIES_URI,
            API_OPTIONS
        );
        const json = await data.json();
        console.log("movies data = ",json.results);

        // dispatch an action
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        popularMovies && getPopularMovies();
    }, []);
};

export default usePopularMovies;
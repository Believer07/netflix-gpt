import { useEffect } from "react";
import { GET_TOP_RATED_MOVIES_URI, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedrMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(
            GET_TOP_RATED_MOVIES_URI,
            API_OPTIONS
        );
        const json = await data.json();
        console.log("movies data = ",json.results);

        // dispatch an action
        dispatch(addTopRatedrMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
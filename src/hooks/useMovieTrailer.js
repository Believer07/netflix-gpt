import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    // const [trailerId, setTrailerId] = useState(null);
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    // fetch trailer using the movieId
    const getMoviesVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json);

        const filterTrailerData = json.results.filter(video => video.type == "Trailer");
        const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
        console.log("trailer = ",trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    };

    // using this we will call the getMoviesVideos function
    useEffect(() => {
        getMoviesVideos();
    },[]);
};

export default useMovieTrailer;
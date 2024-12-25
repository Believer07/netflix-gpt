import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    // i have shifted this logic to to one custom hook, which i'm going to call here
    useMovieTrailer(movieId);
    // // const [trailerId, setTrailerId] = useState(null);
    // const dispatch = useDispatch();

    // // fetch trailer using the movieId
    // const getMoviesVideos = async () => {
    //     const data = await fetch(
    //         `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    //         API_OPTIONS
    //     );
    //     const json = await data.json();
    //     console.log(json);

    //     const filterTrailerData = json.results.filter(video => video.type == "Trailer");
    //     const trailer = filterTrailerData.length ? filterTrailerData[0] : json.results[0];
    //     console.log("trailer = ",trailer);
    //     // setTrailerId(trailer.key);
    //     dispatch(addTrailerVideo(trailer));
    // };

    // // using this we will call the getMoviesVideos function
    // useEffect(() => {
    //     getMoviesVideos();
    // },[]);

    return (
        <div className="w-screen h-screen bg-transparent bg-black flex items-center justify-center">
            <iframe
                className="w-full max-w-screen aspect-video"
                src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/5Z3oIQYfBfY?si=CEYGFvR9APzuj2hu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
};

export default VideoBackground;
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // this is known as early return
    if(!movies) return;

    // MAIN MOVIE TO SHOW THE TRAILER
    const mainMovie = movies[0];
    console.log("main movie = ",mainMovie);
    const {original_title, overview, id} = mainMovie;
    return(
        <div className="bg-transparent z-0 relative">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
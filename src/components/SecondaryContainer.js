import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

    return (
        <div className="bg-black">
            {/*
                MovieList - Popular
                    MovieCard*n
                MovieList - Now Playing
                MovieList - Trending
                MovieList - Horror
            */}
            <div className="-mt-44 pl-16 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;
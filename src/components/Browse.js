import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptComponent from "./GptComponent.js";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    const showGptComponent = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    
    return (
        <div>
            <Header/>
            {showGptComponent ? (
                <GptComponent/>
            ) : (
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>
            )
            }
            {/* <GptSearch/> */}
            {/* <MainContainer/> */}
            {/* <SecondaryContainer/> */}
            {
                /*
                MainContainer
                    - VideoBackground
                    - VideoTitle
                SecondaryContainer
                    - MovieList * n
                        - cards * n
                */
            }

        </div>
    )
};

export default Browse;
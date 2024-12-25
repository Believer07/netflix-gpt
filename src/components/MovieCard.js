import { IMG_CDN_URI } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-52 px-3">
            <img alt="Movie Card" src={IMG_CDN_URI+posterPath}/>
        </div>
    )
}

export default MovieCard;
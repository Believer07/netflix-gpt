export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
};
  
export const GET_NOW_PLAYING_MOVIES_URI = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const GET_POPULAR_MOVIES_URI = "https://api.themoviedb.org/3/movie/popular?page=1";
export const GET_TOP_RATED_MOVIES_URI = "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const IMG_CDN_URI = "https://image.tmdb.org/t/p/w500";

// export const GE

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
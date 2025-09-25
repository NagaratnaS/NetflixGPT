import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/1311031/videos?language=en-US`,
      API_OPTIONS
    );
    const result = await data.json();
    const filterData = result?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : result?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

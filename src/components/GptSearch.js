import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_BACKGROUND} alt="background image" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;

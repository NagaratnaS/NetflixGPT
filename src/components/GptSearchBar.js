import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.hindi.searchGpt}
          className="p-4 m-4 col-span-10"
        />
        <button
          type="submit"
          className="m-4 px-2 py-2 bg-red-600 text-white cursor-pointer col-span-2"
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

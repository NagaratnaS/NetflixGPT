const VideoTitle = ({ title, overview }) => {
  return (
    <div className="p-8 m-8 justify-around">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="py-4 my-5">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-black text-white p-2 m-2 rounded cursor-pointer flex items-center gap-2">
          {/* Play symbol (▶) */}
          <span>▶</span>
          Play
        </button>
        <button className="bg-black text-white p-2 m-2 rounded cursor-pointer flex items-center gap-2">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

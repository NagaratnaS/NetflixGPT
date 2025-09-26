const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] m-8 absolute text-white  w-screen aspect-video">
      <h1 className="font-bold text-xl text-white">{title}</h1>
      <p className="py-4 my-5 text-white">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-2 m-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-opacity-80">
          {/* Play symbol (▶) */}
          <span>▶</span>
          Play
        </button>
        <button className="bg-white text-black p-2 m-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

import React from "react";

const Player = ({id}) => {
  return (
    <div className="w-full lg:px-5 py-2">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-72 xl:h-[470px] lg:h-[400px] md:h-[400px] rounded-md"
      ></iframe>
    </div>
  );
};

export default Player;

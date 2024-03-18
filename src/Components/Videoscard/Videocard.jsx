import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Videocard = ({ video }) => {

  
  // const handleclick = (id)=>{
  //   navigate(`/video/${id}`);
  // onClick={()=>handleclick(video.id.videoId)}
  // }
  
  // console.log("video",video)
  return (
    <div>
     {
      video?.id?.videoId &&  <Link to={`video/${video.id.videoId}`}  className="overflow-hidden">
      <div>
       { video?.snippet?.thumbnails?.medium?.url &&  <img
          src={video.snippet.thumbnails.medium.url}
          className="w-full rounded-lg hover:scale-105 duration-200"
          alt=""
        /> }
      </div>
      <div className="px-2 flex flex-col gap-1">
        <p className="line-clamp-2 mt-2 text-gray-900 dark:text-gray-100 font-semibold">
          {video.snippet.title}
        </p>
        <p className="text-gray-800 dark:text-gray-400 flex items-center gap-1">
          {video.snippet.channelTitle}
          <FaCheckCircle className="text-gray-400 text-sm"/>
        </p>
      </div>
    </Link>
     }
    </div>
  );
};

export default Videocard;

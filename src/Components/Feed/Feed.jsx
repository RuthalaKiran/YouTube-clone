import React, { useState } from "react";
import { videodata } from "../../Utils/Constants";
import Videos from "./Videos";

const Feed = ({ videos}) => {
  // const [videos, setvideos] = useState([]);

  return (
    <div className="h-auto md:px-5 py-1">
     {
      videos &&  <Videos videos={videos} />
     }
      {/* <div className="text-center">
        <button 
        onClick={()=>{setmaxres((prev)=>prev+50)}}
        className="text-xl mt-5 mb-5 bg-blue-400 inline border px-3 py-1 rounded-lg">
          Loading...
        </button>
      </div> */}
    </div>
  );
};

export default Feed;

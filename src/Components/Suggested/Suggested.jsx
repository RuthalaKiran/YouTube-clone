import React, { useEffect, useState } from "react";
import { fetchingdata } from "../../Utils/apis";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Suggested = ({ videoId }) => {
  const [suggested, setsuggested] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  // console.log("suggested", suggested);
  // console.log("sug",videoId)
  // console.log(error)

  const fetchingsuggestedvideos =  () => {
    setloading(true)
   try {
    fetchingdata(
      `search?part=snippet&type=video&relatedToVideoId=${videoId}`
    ).then((data) =>{
      setsuggested(data.items)
      // console.log(data)
      setloading(false)
      seterror("")
    });
   } catch (error) {
    seterror("Try again")
   }
  };
  useEffect(() => {
    fetchingsuggestedvideos();
  }, [videoId]);

  return (
   <div>
    {
      loading ? (
        <div className="dark:text-gray-200">{error.length > 0 ? error : "Loading..."}</div>
      ) :
      (
        <div className="md:p-5 h-auto">
          <p className=" lg:hidden text-lg text-gray-600 font-semibold ml-2 mb-2 dark:text-gray-200">Related videos</p>
        <div>
          {suggested &&
            suggested.map((item, index) => (
              <Link to={`/video/${item && item.id.videoId}`}  key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2 gap-1 lg:gap-x-3 lg:mt-3 sm:gap-x-4 md:gap-x-0 sm:mb-4 md:mb-0 mb-5 ">
                <div className="">
                  <img className="w-full object-cover rounded-md hover:scale-105" src={item && item.snippet.thumbnails.default.url} alt="" />
                </div>
                <div className="md:mb-5">
                  <p className=" lg:text-sm xl:text-lg text-gray-800 font-semibold md:line-clamp-2 dark:text-gray-200">{item && item.snippet.title}</p>
                  <div className="flex gap-1 items-center ">
                  <p className="mt-1 text-sm lg:text-md dark:text-gray-200">{item && item.snippet.channelTitle}</p>
                  <FaCheckCircle className="text-gray-400 text-sm"/>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      )
    }
   </div>
    // <div>sugg</div>
  );
};

export default Suggested;


import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { fetchingdata } from "../../Utils/apis";
import Channelvideos from "../../Components/Channelvideos/Channelvideos";

const Channel = () => {
  const [channel, setchannel] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const { channelId } = useParams();
  // console.log(channelId);
  // console.log(channel);

  const fetchingchannel = () => {
    setloading(true);
    try {
      const channel = fetchingdata(
        `channels?part=snippet&id=${channelId}`
      ).then((data) => {
        // console.log(data)
        setchannel(data.items[0]);
        setloading(false);
        seterror("");
      });
    } catch (error) {
      seterror("something went wrong Try again");
    }
  };

  useEffect(() => {
    fetchingchannel();
  }, [channelId]);

  return (
    <div className="mt-5">
      {loading ? (
        <div>{error.length > 0 ? error : "Loading..."}</div>
      ) : (
        <div>
          {channel === undefined ? (
            "Something went wrong Try again"
          ) : (
            <div className="mt-10">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center gap-3">
                  <img
                    src={channel.snippet && channel.snippet.thumbnails.high.url}
                    className="cursor-pointer rounded-full w-[150px] hover:scale-105"
                    alt=""
                  />
                  <div className="text-gray-800 dark:text-gray-400 flex items-center gap-2">
                   <p> {channel.snippet && channel.snippet.title} </p>
                    <FaCheckCircle className="text-gray-400 text-sm" />
                  </div>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="px-10 mt-5">
                <p className="text-xl text-gray-800 dark:text-gray-100 text-center">Videos</p>
                <Channelvideos/>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Channel;

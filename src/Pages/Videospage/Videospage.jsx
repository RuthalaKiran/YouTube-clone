import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchingdata } from "../../Utils/apis";
import Player from "../../Components/Player/Player";
import Suggested from "../../Components/Suggested/Suggested";
import Comments from "../../Components/Comments/Comments";
import { profileimg } from "../../Utils/Constants";
import LikeDislike from "../../Components/LikeDislike/LikeDislike";
import Channeldata from "../../Components/Channeldata/Channeldata";
import Description from "../../Components/Description/Description";


const Videospage = () => {
  const [videodtls, setvideodtls] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const { videoId } = useParams();
  // console.log(videoId);
  // console.log("videdtls", videodtls);
  // console.log(loading);

  const fetchingvediopagedata = async () => {
    setloading(true);
    try {
      const videodata = await fetchingdata(`videos?part=snippet&id=${videoId}`);
      setvideodtls(videodata.items[0]);
      setloading(false)
    } catch (error) {
      seterror("try again");
      setloading(false);
    }
  };

  useEffect(() => {
    fetchingvediopagedata();
  }, [videoId]);

  return (
    <div className="p-5">
      {loading ? (
        <div>{error.length > 0 ? error : "Loading..."}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" md:col-span-2">
            <Player id={videoId} />
            {videodtls.snippet && <Channeldata videodtls={videodtls} channelid={videodtls.snippet.channelId} />}
            {videodtls.snippet && <Description videodtls={videodtls} />}
          </div>
          <div className="  row-span-5">
            <Suggested videoId={videoId}/>
          </div>
          <div className=" md:col-span-2  inline-flex">
            <Comments videodtls={videodtls}  />
          </div>
        </div>
      )}
    </div>
  );
};

export default Videospage;

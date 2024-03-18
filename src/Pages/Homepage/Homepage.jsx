import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import { fetchingdata } from "../../Utils/apis";

const Homepage = () => {
  const [selectedcat, setselectedcat] = useState(
    localStorage.getItem("category") ? localStorage.getItem("category") : "Home"
  );
  const [selectedicon, setselectedicon] = useState("AiOutlineHome");

  const [videosdata, setvideosdata] = useState([]);
  const [playlist, setplaylist] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    localStorage.setItem("category", selectedcat);
  }, [selectedcat]);

  const fetchingapi = () => {
    setloading(true);
    fetchingdata(`search?part=snippet&q=${selectedcat}&maxResults=200`)
      .then((data) => {
        // console.log(data);
        if (data) {
          let playlistvideos = [];
          let videoandchannelvideos = [];
          data.items.forEach((item) => {
            if (item.id.playlistId) {
              playlistvideos.push(item);
            } else if (item.id.videoId || item.id.channelId) {
              videoandchannelvideos.push(item);
            }
          });
          setplaylist(playlistvideos);
          setvideosdata(videoandchannelvideos);
          setloading(false);
          seterror("");
        }
      })
      .catch((error) => {
        seterror("Try again");
      });
  };

  useEffect(() => {
    fetchingapi();
  }, [selectedcat]);

  return (
    <div className="mt-4 px-5 dark:bg-gray-900">
      <div className=" grid  grid-cols-1 gap-y-3 md:grid-cols-7 md:gap-2  ">
        <div className=" col-span-6 md:col-span-1   ">
          <Sidebar
            selectedcat={selectedcat}
            setselectedcat={setselectedcat}
            selectedicon={selectedicon}
            setselectedicon={setselectedicon}
          />
        </div>
        <div className=" col-span-6 md:col-span-6 xl:ml-[50px] lg:ml-[90px] md:ml-[30px]  ">
          {loading ? (
            <div className="flex text-2xl items-center justify-center">
              {error.length > 0 ? error : "Loading..."}
            </div>
          ) : (
            <div>
              {videosdata.length <= 0 || videosdata === undefined ? (
                "something went wrong (server error)"
              ) : (
                <Feed videos={videosdata} loading={loading} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import { value_converter } from "../../Utils/apis";
import moment from "moment";

const Description = ({ videodtls }) => {
  const description = videodtls && videodtls.snippet.description;
  const [desc, setdesc] = useState(description.slice(0, 200));
  const [show, setshow] = useState(false);
  //   console.log(description);
  //   console.log("desc -----", desc);
  // console.log("show", show);
  return (
    <div className=" px-2 py-2 sm:px-3 sm:py-2 h-auto  my-2 sm:mx-3 bg-gray-200 dark:bg-gray-700 rounded-lg">
      <div className="flex gap-2 md:gap-5 items-center">
        <p className="text-sm sm:text-md md:text-lg text-gray-900 dark:text-gray-200">
          <span className="font-semibold">
            {videodtls && value_converter(videodtls.statistics.viewCount)}
          </span>{" "}
          views
        </p>
        <p className="text-sm sm:text-md md:text-lg">
          {videodtls &&
            moment(videodtls.snippet.publishedAt.slice(0, 19)).fromNow()}
        </p>
      </div>
      <p
        className={` text-sm sm:text-md break-words ${
          show ? "" : "line-clamp-2"
        } `}
      >
        {desc}
      </p>
      <p
        onClick={() => {
          setshow(!show);
          if (show) {
            setdesc(description.slice(0, 200));
          } else {
            setdesc(description);
          }
        }}
        className="text-gray-950 font-semibold cursor-pointer dark:text-gray-100"
      >
        {show ? "see less" : "see more"}
      </p>
    </div>
  );
};

export default Description;

import React, { useEffect, useState } from "react";
import { fetchingdata } from "../../Utils/apis";
import { profileimg } from "../../Utils/Constants";
import { BiLike } from "react-icons/bi"; //like
import { BiDislike } from "react-icons/bi"; //dislike
import moment from "moment";

const Comments = ({ videodtls, commentscount }) => {
  const [comments, setcomments] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  // console.log("comments", comments);

  const fetchingcomments = async () => {
    seterror(true);
    try {
      const comment = await fetchingdata(
        `commentThreads?part=snippet&videoId=${videodtls.id}&maxResults=100`
      ).then((data) => {
        setcomments(data.items);
        // console.log(data);
        seterror("");
      });
    } catch (error) {
      seterror("Try again");
    }
  };

  useEffect(() => {
    fetchingcomments();
  }, [videodtls.id]);

  return (
    <div>
      {loading ? (
        <div>{error.length > 0 ? error : "Loading..."}</div>
      ) : (
        <div>
          {comments === undefined ? (
            "Something went wrong Retry (server error) "
          ) : (
            <div className="flex flex-col sm:px-3">
              {/* <div>{videodtls && videodtls.statistics.commentCount}</div> */}
              {videodtls && videodtls.statistics && (
                <p className=" text-md md:text-xl flex items-center gap-2 font-bold">
                  <span className="">{videodtls.statistics.commentCount}</span>
                  Comments
                </p>
              )}
              <div className="mt-5 flex flex-col gap-5">
                {comments &&
                  comments.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 sm:gap-5"
                    >
                      <img
                        className="w-7 sm:w-10 rounded-full"
                        src={
                          (item &&
                            item.snippet.topLevelComment.snippet
                              .authorProfileImageUrl) ||
                          profileimg
                        }
                        alt=""
                      />
                      <div className="mt-3">
                        <div className="flex  items-center gap-2 ">
                          <p className="text-sm md:text-lg text-gray-900 dark:text-gray-200">
                            {item &&
                              item.snippet.topLevelComment.snippet
                                .authorDisplayName}
                          </p>
                          <p className="text-xs md:text-md text-gray-500 dark:text-gray-300">
                            {item &&
                              moment(
                                item.snippet.topLevelComment.snippet.publishedAt
                              ).fromNow()}
                          </p>
                        </div>
                        <div className="">
                          <p className="text-wrap text-[10px] break-words line-clamp-2 sm:text-sm md:text-lg ">
                            {item &&
                              item.snippet.topLevelComment.snippet.textDisplay}
                          </p>
                        </div>
                        <div className="flex pt-1 items-center gap-3">
                          <div className="flex items-center gap-1">
                            <BiLike className="dark:text-gray-200 text-lg sm:text-2xl text-gray-700" />
                            <p>
                              {item &&
                                item.snippet.topLevelComment.snippet.likeCount}
                            </p>
                          </div>
                          <p>
                            {" "}
                            <BiDislike className="dark:text-gray-200 text-lg sm:text-2xl text-gray-700" />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;

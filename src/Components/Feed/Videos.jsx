import React from 'react'
import { Link } from 'react-router-dom'
import Videocard from '../Videoscard/Videocard'
import ChannelCard from '../Channelcard/ChannelCard'

const Videos = ({videos}) => {
  return (
    <div className=" gap-x-4 gap-y-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
    {
        videos.map((item,index)=>(
            <div key={index} className='' >
               {item.id.videoId && <Videocard video ={item} />}
               {item.id.channelId && <ChannelCard channel = {item} />}
            </div>
        ))
    }
   </div>
  )
}

export default Videos


{/* <div className=" gap-x-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
{videos.map((item, index) => (
  <Link key={index} className="bg-red-200 ">
    <div>
      <img src={item.snippet.thumbnails.medium.url} className="w-full" alt="" />
    </div>
    <div className="px-2">
      <p>{item.snippet.title}</p>
      <p>{item.snippet.channelTitle}</p>
    </div>
  </Link>
))}
</div> */}
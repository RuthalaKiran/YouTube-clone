import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ChannelCard = ({channel}) => {
  return (
    <div>
      <Link to={`/channel/${channel.id.channelId}`}>
         <div className='flex flex-col items-center justify-center'>
         <div className='flex flex-col justify-center items-center gap-3'>
            <img src={channel.snippet.thumbnails.default.url}
            className='rounded-full w-[100%] hover:scale-105'
            alt="" />
            <p className="text-gray-800 dark:text-gray-400 flex items-center gap-2">
            {channel.snippet.channelTitle}
            <FaCheckCircle className="text-gray-400 text-sm"/>
          </p>
           </div>
         </div>
      </Link>
    </div>
  )
}

export default ChannelCard

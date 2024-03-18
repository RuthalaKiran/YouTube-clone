import React from 'react'
import { BiLike } from "react-icons/bi"; //like
import { BiDislike } from "react-icons/bi"; //dislike
import { BiSolidLike } from "react-icons/bi"; //liked
import { BiSolidDislike } from "react-icons/bi"; //disliked
import { value_converter } from '../../Utils/apis';

const LikeDislike = ({videodtls}) => {
  return (
    <div className=' ml-2 sm:ml-0 rounded-xl flex px-1 py-0.5 sm:px-2 sm:py-1 lg:p-2 gap-1 sm:gap-4 dark:bg-gray-700 bg-gray-200'>
       <div className='flex items-center gap-1 cursor-pointer'>
       <BiLike className=' text-xl sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-100' />
      <p className='text-xs sm:text-md'> {videodtls && value_converter(videodtls.statistics.likeCount)}</p>
       </div>
       
       <div className='border-l-2 flex items-center border-gray-400 cursor-pointer'>
       <BiDislike className='text-xl sm:text-xl lg:text-2xl text-gray-800 ml-1 sm:ml-2 dark:text-gray-100'/>
       </div>
    </div>
  )
}

export default LikeDislike

import React, { useEffect, useState } from 'react'
import { fetchingdata, value_converter } from '../../Utils/apis';
import { profileimg } from '../../Utils/Constants';

import LikeDislike from "../../Components/LikeDislike/LikeDislike";
import { Link, useNavigate } from 'react-router-dom';

const Channeldata = ({channelid,videodtls}) => {
  const [channeldata, setchanneldata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  // console.log(channeldata)


  // console.log("channeldata",channeldata)
  // console.log("form videoftls",videodtls)
  
  const fetchingchannledata = ()=>{
    setloading(true)
    try {
       const channelDtata=  fetchingdata(`channels?part=snippet&id=${channelid}`).then((data)=>{
        // console.log(data)
        setchanneldata(data.items[0])
        // console.log("chdata",data)
        setloading(false)
        seterror("")
       })
       
    } catch (error) {
        console.log(error.message)
        seterror("Try again")
    }
  }
useEffect(()=>{
    fetchingchannledata();
},[channelid])

// const handleclick = (channel)=>{
//      navigate(`channel/${channel}`)
// }

  return (
    <div className='lg:px-5 py-2'>
    {
       loading?  (
            <div className='dark:text-gray-100'>{error.length>0 ? error : "Loading..."}</div>
        ) :
        (
           <div>
            {channeldata === undefined ? "Something went wrong Retry" : (
              <div>
              <p className='text-md dark:text-gray-100 md:text-xl font-bold mb-2 ml-2 ' >{videodtls && videodtls.snippet.title}</p>
              <div className='flex flex-row justify-between sm:px-2'>
                 <div className="left flex  gap-[5px] sm:gap-2 ">
                 {channeldata.snippet && <img className='w-8 h-8 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full' src={channeldata.snippet.thumbnails.default.url} alt="" />}
                  <Link to={`/channel/${videodtls && videodtls.snippet.channelId}`} className='flex flex-col' >
                    <p className='text-xs sm:text-sm lg:text-lg text-gray-900 font-semibold dark:text-gray-100'>{channeldata.snippet && channeldata.snippet.title}</p>
                    <p className='text-xs sm:text-md lg:text-lg text-gray-600 dark:text-gray-100'>{channeldata.statistics && value_converter(channeldata.statistics.subscriberCount)}</p>
                  </Link>
                 <div className='flex items-center lg:pl-5 '> <button className='bg-red-500 text-white text-xs sm:text-lg px-1 py-0.5 sm:ml-2 sm:px-1 sm:py-1 lg:px-2 lg:py-1  rounded-md'>Subscribe</button></div>
                 </div>
                 <div className="right flex items-center mr-2 sm:mr-0 ">
                        <LikeDislike videodtls = {videodtls}/>
                 </div>
             </div>
            </div>
            )}
           </div>
        )
    }
    </div>
  )
}

export default Channeldata

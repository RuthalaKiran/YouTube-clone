import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchingdata } from '../../Utils/apis';

const Channelvideos = () => {
const {channelId} = useParams()
const [channelvideos,setchannelvides] = useState([]);
const [loading, setloading] = useState(false);
const [error, seterror] = useState("");
// console.log(channelvideos)

const fetchingchannelvideos = ()=>{
    setloading(true);
  try {
    const vid = fetchingdata(`search?part=snippet&channelId=${channelId}`).then((data)=>{
        setchannelvides(data.items)
        setloading(false)
        seterror("")
    })
  } catch (error) {
    seterror("Try again")
  }
}
useEffect(()=>{
    fetchingchannelvideos();
},[channelId])

  return (
    <div className=' mt-5 sm:mt-10'>
      {
        loading ? (
            <div className='text-gray-700 dark:text-gray-100'>
                { error.length>0 ? error : "Loading..."}
            </div>
        ) :
        (
            <div className='text-gray-800 dark:text-gray-100'>
              {
                channelvideos === undefined ? "something went wrong Try again" :
                (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                        {
                            channelvideos.map((item,index)=>(
                                <Link to={`/video/${item && item.id.videoId}`} key={index} className='rounded-md  flex flex-col items-center gap-1 overflow-hidden'>
                                    <div className='overflow-hidden'>
                                    { item && <img className='w-96 sm:w-[100%] rounded-md hover:scale-105' src={item.snippet.thumbnails.medium.url} />}
                                    </div>
                                    <div>
                                        <p className='text-sm sm:text-md font-semibold text-gray-800 dark:text-gray-100'>{item && item.snippet.title}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )
              }
            </div>
        )
      }
    </div>
  )
}

export default Channelvideos

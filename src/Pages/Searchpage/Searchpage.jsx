import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchingdata } from '../../Utils/apis';
import { FaCheckCircle } from 'react-icons/fa';

const Searchpage = () => {
  const { searchTerm} = useParams();
  const [searchtermres ,setsearchtermres] = useState([]);
  const [loading,setloading] = useState(false);
  const [error,seterror] = useState("");
  // console.log(searchtermres)

  const fetchingsearchtermres = ()=>{
    setloading(true)
   try {
    const res = fetchingdata(`search?part=snippet&q=${searchTerm && searchTerm}`).then((data)=>{
      setsearchtermres(data.items);
      setloading(false)
      seterror("")
    })
   } catch (error) {
    seterror("Try again")
   }
  }
  useEffect(()=>{
  fetchingsearchtermres();
  },[searchTerm])

  

  return (
    <div className='mt-5 px-5'>
      {
        loading? (
          <div>{error.length>0? error : "Loading..."} </div>
        ) :
        (
          <div>
            {
              searchtermres === undefined ? "Some thing went wrong Try again (server error)" :
              (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {
                    searchtermres && searchtermres.map((item,index)=>(
                      <Link to={`/video/${item.id.videoId}`} key={index} >
                         <div>
                          {item?.snippet?.thumbnails?.medium?.url && <img className='w-[100%]' src={item.snippet && item.snippet.thumbnails.medium.url} />}
                         </div>
                          <p className='mt-2 line-clamp-2 text-gray-800 dark:text-gray-100'>{item.snippet && item.snippet.title}</p>
                         <div className='flex items-center gap-2 mt-1'>
                          <p className='text-gray-800 dark:text-gray-100'>{item.snippet && item.snippet.channelTitle}</p>
                          <FaCheckCircle className="text-gray-400  text-sm"/>
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

export default Searchpage

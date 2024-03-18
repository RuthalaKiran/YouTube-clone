import React, { useState } from "react";
import { category } from "../../Utils/Constants";

const Sidebar = ({
  selectedcat,
  setselectedcat,
  selectedicon,
  setselectedicon,
}) => {
  // console.log(selectedcat);

  return (
    <div className=" md:fixed md:h-[90vh] pb-2 md:px-5 md:py-2  md:pb-10 overflow-y-hidden overflow-x-hidden hover:overflow-x-auto md:overflow-x-hidden md:overflow-y-hidden md:hover:overflow-y-auto">
      <div className="flex flex-row md:flex-col gap-5 md:gap-9">
        {category.map((item, index) => (
          <div
            key={index}
            className="hover:bg-gray-300 dark:hover:bg-gray-400 bg-gray-200 dark:bg-gray-500 rounded-xl md:rounded-md"
          >
            <div
              onClick={() => {
                setselectedcat(item.name);
                setselectedicon(item.icon);
              }}
              className={`flex items-center gap-3 md:items-center cursor-pointer justify-start
            px-3 py-2 rounded-xl md:rounded-md md:py-1 md:gap-5 lg:pr-2 
            
            ${
              selectedcat === item.name ? "bg-gray-500 dark:bg-gray-300 " : ""
            } duration-0 `}
            >
              <div className="">
                <p
                  className={`text-xl md:ml-5 text-gray-900 ${
                    selectedicon === item.icon
                      ? "text-neutral-50 dark:text-gray-950"
                      : ""
                  }`}
                >
                  {<item.icon />}
                </p>
              </div>
              <div>
                <p
                  className={`text-md md:hidden lg:block text-gray-900 ${
                    selectedcat === item.name
                      ? "text-white/80 dark:text-gray-950"
                      : ""
                  } `}
                >
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <div className='md:fixed md:h-[90vh]  bg-green-400 px-5 py-2 overflow-x-hidden overflow-y-auto'> 
     <div className='flex flex-row md:flex-col gap-9'>
       {
        category.map((item,index)=>(
          <div key={index} className='flex md:items-center md:gap-5 bg-slate-300 md:px-3'>
               <div>
                <p>{<item.icon/>}</p>
               </div>
               <div>
                <p>{item.name}</p>
               </div>
          </div>
        ))
       }
     </div>
    </div> */
}

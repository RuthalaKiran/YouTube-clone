import React, { useEffect, useState } from "react";
import { dark, light, logo } from "../../Utils/Constants.js";
import { Link, useNavigate } from "react-router-dom";
import Darkmode from "./Darkmode.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [searchterm, setsearchterm] = useState("");
  // console.log(searchterm);
  const navigate = useNavigate();

  const handlenavigate = () => {
    if (searchterm.length > 0) {
      navigate(`/search/${searchterm}`);
      // console.log(searchterm)
    } else {
      navigate("/");
    }
  };
  const handleclose = () => {
    setsearchterm("");
    navigate('/')
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-3 sm:py-2 sm:px-10 shadow-md  z-40 sticky top-0 ">
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            {" "}
            <img src={logo} className="w-16 h-8 object-contain sm:h-10 cursor-pointer" alt="" />
          </Link>
        </div>
        <form onSubmit={handlenavigate} className="relative w-fu96 flex group border border-gray-400 dark:border-gray-600 dark:group-focus-within:border-gray-400  rounded-full  ">
          <div>
            <IoSearchOutline className="dark:text-white text-2xl absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 hidden sm:group-focus-within:block " />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchterm}
            onChange={(e) => setsearchterm(e.target.value)}
            className=" border-r-2 w-full md:w-[400px]
             group-focus-within:border-blue-500 dark:group-focus-within:border-gray-400  dark:border-gray-600  dark:text-gray-50  dark:group-focus-within:outline-2 shadow-inner border p-1 sm:p-2
              rounded-s-full focus:outline-none text-md  pl-5 sm:pl-5 md:group-focus-within:pl-12
              text-gray-600  dark:bg-gray-800"
          />
          <button onClick={handleclose} type="button">
            <IoMdClose
              className={` ${
                searchterm.length > 0 ? "block" : "hidden"
              } text-2xl z-20 dark:text-white  absolute right-16 top-1/2 -translate-y-1/2 cursor-pointer  text-gray-500`}
            />
          </button>

          <button type="submit"
            className="flex items-center cursor-pointer "
          >
            <IoSearchOutline className=" text-2xl  text-gray-500 dark:text-white rounded-e-full w-14  outline-none " />
          </button>
        </form>
        <div>
          <Darkmode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

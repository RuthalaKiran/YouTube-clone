import React, { useEffect, useState } from "react";
import { dark, light } from "../../Utils/Constants";

const Darkmode = () => {
  const [theme, settheme] = useState("light");
  const ele = document.documentElement;
  // console.log(ele)
  // console.log(theme)

  useEffect(() => {
    if(theme === "light"){
        ele.classList.add("light");
        ele.classList.remove("dark");
    }
    else{
        ele.classList.add("dark");
        ele.classList.remove("light");
    }
  }, [theme]);

  return (
    <div
      className="relative"
      onClick={() => settheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <img
        src={light}
        className={`absolute ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } w-20 cursor-pointer transition-all duration-200 `}
        alt=""
      />
      <img
        src={dark}
        alt=""
        className={`w-20 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } cursor-pointer transition-all duration-200 `}
      />
    </div>
  );
};

export default Darkmode;

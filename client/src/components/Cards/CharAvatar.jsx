import React from "react";
import { getInitials } from "../../utils/helper";

function CharAvatar({
  fullName = "",
  width = "w-12",
  height = "h-12",
  style = "",
}) {
  return (
    <div
      className={`${width} ${height} ${style} 
        flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 text-gray-800 dark:text-white font-semibold text-sm shadow-md transition-all duration-300 hover:scale-105`}
    >
      {getInitials(fullName)}
    </div>
  );
}

export default CharAvatar;

import React from 'react';
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const CardBlog = ({ user, img, date, title, text }) => {
  return (
    <div className="p-4 flex flex-col gap-6 border rounded-md cursor-pointer group bg-white hover:shadow-md duration-200 ease-linear">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img  
            src={img} 
            alt={title} 
            title={title}
            className="w-full h-[300px] object-cover group-hover:scale-125 duration-200 ease-linear group-hover:brightness-50 rounded-lg"
        />
      </div>
      <div className="flex justify-between">
        <span className="flex gap-3 items-center">
            <FaUser className="text-blue-500" />
            {user}
        </span>
        <span className="flex gap-3 items-center">
            <FaRegCalendarAlt className="text-blue-500" />
            {date}
        </span>
      </div>
      <h3 className="text-lg font-bold text-neutral-600">
        {title}
      </h3>
      <p className="text-neutral-500">
        {text}
      </p>
      <button className="bg-blue-400 font-bold text-white rounded-md hover:shadow-md hover:shadow-blue-300 duration-200 ease-linear
        px-5 py-2 w-[126px] text-sm">
        Read more
      </button>
    </div>
  )
}

export default CardBlog;
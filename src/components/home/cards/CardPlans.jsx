import React from 'react';
import { FaStar } from "react-icons/fa6";
import { IoIosAirplane } from "react-icons/io";

const CardPlans = ({ title, sub_id, recomendation, description, price, image}) => {
  return (
    <div className="w-full rounded-md bg-white md:hover:scale-[1.03] duration-200 ease-linear cursor-pointer hover:shadow-md">
      <div className="w-full flex flex-col gap-6 items-start p-4">
        <div className="w-full">
            <img 
                className="object-cover w-full md:w-[300px] h-[300px]" 
                src={image}
                alt={title}
                title={title}
            />
        </div>
        <div className="w-full flex justify-around">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-neutral-700">{title}</h2>
                <span className="text-neutral-500 text-sm">{sub_id}</span>
            </div>
            <div className="flex items-center gap-2">
                {Array.from({ length: recomendation} ).map((_, index) => (
                    <span key={index * Math.random()}>
                        <FaStar className="text-blue-600" />
                    </span>
                ))
                }
            </div>
        </div>
        <div>
            <p className="text-neutral-700 tracking-wider">{description}</p>
        </div>
        <div>
            <p>
                <span className="text-2xl text-blue-600 font-bold">${price}</span>
                /Hour
            </p>
        </div>
        <hr className="w-full" />
        <button className="flex items-center gap-4 px-6 py-2 font-semibold bg-blue-500 text-white my-1 rounded-full shadow-md
        hover:shadow-blue-500 hover:scale-[1.04] duration-200 ease-linear ">
            <IoIosAirplane className="text-xl" />
            Look Now
        </button>
      </div>
    </div>
  )
}

export default CardPlans;
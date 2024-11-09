import React from 'react';

const CardFeature = ({ title, description, icon }) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-md flex flex-col gap-4 items-center cursor-pointer
    hover:opacity-80 hover:bg-blue-100 border-[3px] border-white hover:border-blue-400">
      <div className="text-blue-400 text-5xl">
        {icon}
      </div>
      <div>
        <h3 className="text-neutral-600 font-semibold text-xl">
            {title}
        </h3>
      </div>
      <div>
        <p className="text-neutral-500 text-center">
            {description}
        </p>
      </div>
    </div>
  )
}

export default CardFeature;
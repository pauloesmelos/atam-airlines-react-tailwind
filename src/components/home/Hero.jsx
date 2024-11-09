import React from 'react';
import Plane from "../../assets/plane.png";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] bg-slate-900 relative overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto px-6 h-full flex flex-col items-center justify-center">
        {/* grid container hero and image */}
        <div className="w-full grid gap-14 md:grid-cols-2">
            <div className="flex flex-col gap-4 md:gap-8 animationLeft">
                <h2 className="text-lg md:text-xl text-blue-400 font-medium">
                    Welcome To ATAM AIRLINES Website!
                </h2>
                <h1 className="text-3xl md:text-4xl text-white font-semibold max-w-[400px] md:max-w-[650px] md:leading-[50px]">
                    Luxury Experiences <br/> With Our Services
                </h1>
                <p className="text-sm text-neutral-400 max-w-[400px] text-justify leading-6 tracking-wider">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid natus odit necessitatibus alias itaque assumenda dignissimos minus.
                </p>
                <div className="flex flex-col md:flex-row items-left gap-8">
                    <button className="bg-blue-400 text-black rounded-full px-6 py-3 text-center w-[140px] font-semibold
                    hover:shadow-md hover:shadow-blue-500 duration-200 ease-linear hover:scale-[1.04]">
                        Flight Now
                    </button>
                    <button className="bg-transparent text-white rounded-full px-6 py-3 text-center w-[140px] font-semibold
                    hover:shadow-md border-2 hover:opacity-65 border-blue-400 duration-200 ease-linear hover:scale-[1.04]">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="w-full place-content-center animationRight">
                {/* place-content-center posicionou o container no meio da tela */}
                <img
                    className="object-cover w-[400px] md:scale-[1.1]"
                    src={Plane} 
                    alt="ATAM Plane" 
                    title="ATAM Plane"
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
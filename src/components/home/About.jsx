import React from 'react';
import Mask from "../../assets/mask.png";
import { about } from '../../data/data';

const About = () => {
  const [infos, setInfos] = React.useState([]);
  React.useEffect(() => {
    setInfos(about);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="w-full grid lg:grid-cols-2 gap-12">
            {/* mask plane */}
            <div 
                className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-center bg-no-repeat bg-cover relative mask mx-auto"
                style={{ backgroundImage: `url(${Mask})` ,}}
            />
            {/* content */}
            <div className="flex flex-col items-start gap-6">
                <span className="text-sm text-blue-400 font-bold">ABOUT US</span>
                <h1 className="text-3xl font-bold text-neutral-700">We Are Here To Bring You All The Comfort And Pleasure</h1>
                <p className="tracking-wide text-neutral-500 text-sm md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam beatae ad obcaecati facere veniam iusto minima explicabo magni, excepturi necessitatibus fugit tempore deleniti illum officiis asperiores fuga. Fugit, iste?
                </p>
                <div className="flex flex-col gap-3">
                    {infos.map((info) => (
                        <div className="flex items-center gap-4" key={info.id * Math.random()}>
                            <span className="text-sm text-white p-2 bg-blue-400 rounded-full">
                                {info.icon}
                            </span>
                            <p className="text-semibold tracking-wide text-neutral-600 text-sm md:text-lg">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="text-white font-bold bg-blue-400 rounded-full py-3 px-8 text-sm shadow-md
                hover:translate-y-[-5px] duration-200 ease-linear hover:shadow-blue-400">
                    Discover More
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
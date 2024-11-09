import React from 'react';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Wallpaper from "../../assets/wallpaper.jpg";

const Newsletter = () => {
  const style = {
    input: {
        focus: "w-[320px] bg-white flex items-center gap-4 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-blue-500 relative duration-200 ease-linear",
        notFocus: "w-[320px] bg-white flex items-center gap-4 duration-200 ease-linear"
    }
  }
  const [focus, setFocus] = React.useState(false);

  const handleClick = ({ target }) => {
    const name = target.name;
    if(name !== "email") {
        setFocus(false);
    }
    else {
        setFocus(true);
    }
  }
  //bg cover ajustou a imagem
  return (
    <section onClick={handleClick} style={{ backgroundImage: `url(${Wallpaper})` }} className="w-full py-24 relative object-cover
    bg-center bg-no-repeat bg-cover z-[100]">
    {/* overlay */}
    <div className="w-full h-full absolute top-0 left-0 bg-black/70 z-[-10] blur-lg" />
      <div className="w-full max-w-[1100px] mx-auto px-3 z-50">
        <div className="w-full z-50 flex justify-between brightness-100">
            <h1 className="text-white font-bold text-4xl tracking-wider">It's Time is Now, BE ATAM!</h1>
            <div className="flex items-center gap-6">
                <div 
                    className={focus ? style.input.focus : style.input.notFocus}
                    onClick={handleClick}
                >
                    <MdOutlineMarkEmailRead className={`${focus ? "ml-3 text-xl text-blue-600" : "ml-3 text-xl"}`} />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email address"
                        className="w-full h-full outline-none p-3"
                    />
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md border-4 border-blue-500 hover:border-blue-600">
                    Join Newsletter
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
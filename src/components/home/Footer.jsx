import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [arrowIsActive, setArrowIsActive] = React.useState(false);
  const getCurrentYear = () => {
    const year = new Date().getUTCFullYear();
    return year;
  }
  const goTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }
  const renderizeArrow = () => {
    if(window.scrollY > 2500) {
        setArrowIsActive(true);
    }
    else if(window.scrollY < 2500) {
        setArrowIsActive(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", renderizeArrow);
    return () => {
        window.removeEventListener("scroll", renderizeArrow);
    }
  }, []);

  return (
    <footer className="py-6 w-full bg-slate-700">
        <div className="w-full max-w-[1100px] mx-auto px-3">
            <div className="w-full flex justify-between flex-col md:flex-row gap-5">
                <div>
                    <h1 className="text-neutral-50 font-semibold">
                        ATAM Arlines &copy; {getCurrentYear()} - All rights reserved.
                    </h1>
                </div>
                <div className="flex items-center gap-5 text-neutral-300 text-sm flex-wrap">
                    <a href="#" target="_blank">
                        Term and conditions
                    </a>
                    <a href="#" target="_blank">
                        Long Term Contracts
                    </a>
                    <a href="#" target="_blank">
                        Copyright Policy
                    </a>
                    <a href="#" target="_blank">
                        Customer Support
                    </a>
                </div>
                { arrowIsActive && (
                    <div className="fixed bottom-14 right-10">
                        <FaArrowUp 
                            size={50} 
                            className="p-2 text-blue-500 bg-white rounded-full border-2 border-blue-300 shadow-md
                            cursor-pointer hover:bg-gray-200 duration-200 animationPong"
                            onClick={goTop}
                        />
                    </div>
                )}
            </div>
        </div>
    </footer>
  )
}

export default Footer;
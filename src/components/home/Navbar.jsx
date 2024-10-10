import React from 'react';
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { navLinks } from '../../data/data';

const Navbar = () => {
  const style = {
    link: {
        active: "text-blue-400 hover:text-blue-600 duration-200 ease-linear font-semibold",
        notActive: "text-white hover:text-neutral-400 duration-200 ease-linear font-semibold"
    }
  }
  const [links, setLinks] = React.useState([]);
  React.useEffect(() => {
    setLinks(navLinks);
  }, []);

  return (
    <header className="w-full absolute z-50">
      <nav className="w-full max-w-[1100px] mx-auto py-5 px-6">
        <div className="w-full flex justify-between items-center">
            {/* Logo */}
            <div>
                <h1 className="text-white text-3xl md:text-4xl font-semibold cursor-pointer">
                    ATAM.
                </h1>
            </div>
            {/* Logo */}
            <div>
                <div className="hidden md:flex items-center gap-8">
                    { links.map((link) => (
                        <Link 
                            key={link.id * Math.random()} 
                            to={link.path}
                        >
                            <span className={link.active ? style.link.active : style.link.notActive}>
                                {link.title}
                            </span>
                        </Link>
                    ))}
                    <button className="bg-blue-400 rounded-full text-neutral-800 px-6 py-3 font-semibold
                    hover:scale-[1.04] hover:shadow-md duration-200 ease-linear hover:shadow-blue-500">
                        Book Now
                    </button>
                </div>
                <div className="block md:hidden">
                    <LuMenu className="text-3xl text-white hover:text-blue-400 cursor-pointer" />
                </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
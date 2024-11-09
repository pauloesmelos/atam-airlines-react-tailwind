import React from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, action, links }) => {
  const style = {
    menu: {
        open: "w-full h-screen fixed left-0 top-0 bg-white ml-0 duration-200 ease-linear",
        close: "w-full h-screen fixed left-0 top-0 bg-white ml-[-100%] duration-200 ease-linear"
    },
    itens: {
        active: "text-2xl text-white text-semibold p-2 w-[600px] bg-blue-600 border-2 border-blue-600 rounded-md",
        notActive: "text-2xl text-blue-600 font-bold"
    }
  }
  return (
    <div className={isOpen ? style.menu.open : style.menu.close}>
      <div className="w-full px-6 py-4">
        <div className="w-full flex items-center justify-between">
            <h1 className="text-blue-600 text-3xl md:text-4xl font-bold">ATAM.</h1>
            <IoMdClose 
                onClick={action} 
                className="text-4xl text-black cursor-pointer hover:text-blue-600 duration-200 ease-linear"
            />
        </div>
        <div className="w-full h-screen flex items-center justify-center">
            <ul className="flex flex-col items-left gap-8">
                {links.map((link) => (
                    <li key={link.id * Math.random()}>
                        <Link className={link.active ? style.itens.active : style.itens.notActive} to={link.path}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu;
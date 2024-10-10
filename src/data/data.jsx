import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";

export const navLinks = [
    {
        id: 0,
        title: "Home",
        path: "/",
        active: true
    },
    {
        id: 1,
        title: "About",
        path: "/about",
        active: false
    },
    {
        id: 2,
        title: "Contact",
        path: "/contact",
        active: false
    },
    {
        id: 3,
        title: "Legal",
        path: "/legal",
        active: false
    },
    {
        id: 4,
        title: "Newsletter",
        path: "/newsletter",
        active: false
    },
];

export const features = [
    {
        id: 0,
        title: "Hotels on the House",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid natus odit necessitatibus alias itaque assumenda dignissimos minus.",
        icon: <MdOutlineBed />
    },
    {
        id: 1,
        title: "Safe to Trust",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid natus odit necessitatibus alias itaque assumenda dignissimos minus.",
        icon: <AiOutlineSafetyCertificate />
    },
    {
        id: 2,
        title: "Wordwide Customers",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid natus odit necessitatibus alias itaque assumenda dignissimos minus.",
        icon: <BiWorld />
    },
]
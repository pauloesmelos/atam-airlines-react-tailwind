import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
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
];

export const about = [
    {
        id: 0,
        icon: <FaCheck />,
        description: "Lorem ipsum, dolor sit amet consectetur.",
    },
    {
        id: 1,
        icon: <FaCheck />,
        description: "Lorem ipsum, dolor sit amet consectetur.",
    },
    {
        id: 2,
        icon: <FaCheck />,
        description: "Lorem ipsum, dolor sit amet consectetur.",
    },
];

export const plans = [
    {
        id: 0,
        title: "Private Charter Jet",
        sub_id: "Charter B1732",
        recomendation: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 560,
        image: "https://images.unsplash.com/photo-1521900092653-4bf38fcd896a?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 1,
        title: "Medical Chopper",
        sub_id: "Charter C2732",
        recomendation: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 270,
        image: "https://images.unsplash.com/photo-1487553333251-6c8e26d3dc2c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Private Plane",
        sub_id: "Charter F5732",
        recomendation: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        price: 250,
        image: "https://images.unsplash.com/photo-1533567608753-cdbfdc37e66d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];
export const blog = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1587893904903-52bdb6ad0c0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: "Amin Najva",
        date: "Nov 15, 2023",
        title: "Most Visited Countries In Last 3 Years",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing parsing."
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: "Jalin Houston",
        date: "Dez 25, 2024",
        title: "Most Visited Countries In Last 3 Years",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing parsing."
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: "Thomas Arlindo",
        date: "Jun 12, 2023",
        title: "Most Visited Countries In Last 3 Years",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing parsing."
    },
]
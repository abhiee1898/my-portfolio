"use client"; 
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null); // State for active menu item
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`absolute top-1 inset-x-0 max-w-3xl mx-auto z-50 ${className}`}>
      <div className="flex items-center justify-between p-4">
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose className="text-white text-3xl" /> : <AiOutlineMenu className="text-white text-3xl" />}
        </div>
      </div>

      {/* Menu for larger screens */}
      <Menu setActive={setActive} className={`hidden md:flex`}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" icon={AiOutlineHome} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="About" icon={AiOutlineUser} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects" icon={AiOutlineFundProjectionScreen} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/blog"}>
          <MenuItem setActive={setActive} active={active} item="Blog" icon={FaBlog} className="text-lg md:text-xl" />
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact" icon={AiOutlineMail} className="text-lg md:text-xl" />
        </Link>
      </Menu>

      {/* Smooth Opening Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-16 p-4 bg-black text-white rounded-lg shadow-lg flex flex-col md:hidden transition-opacity duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link href={"/"} onClick={() => { setActive('Home'); setIsOpen(false); }} className="mb-4">
          <MenuItem setActive={setActive} active={active} item="Home" icon={AiOutlineHome} className="text-lg" />
        </Link>
        <Link href={"/about"} onClick={() => { setActive('About'); setIsOpen(false); }} className="mb-4">
          <MenuItem setActive={setActive} active={active} item="About" icon={AiOutlineUser} className="text-lg" />
        </Link>
        <Link href={"/projects"} onClick={() => { setActive('Projects'); setIsOpen(false); }} className="mb-4">
          <MenuItem setActive={setActive} active={active} item="Projects" icon={AiOutlineFundProjectionScreen} className="text-lg" />
        </Link>
        <Link href={"/blog"} onClick={() => { setActive('Blog'); setIsOpen(false); }} className="mb-4">
          <MenuItem setActive={setActive} active={active} item="Blog" icon={FaBlog} className="text-lg" />
        </Link>
        <Link href={"/contact"} onClick={() => { setActive('Contact'); setIsOpen(false); }} className="mb-4">
          <MenuItem setActive={setActive} active={active} item="Contact" icon={AiOutlineMail} className="text-lg" />
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;

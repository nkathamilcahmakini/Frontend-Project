'use client'
import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { SiAlwaysdata } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

function SideNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageClick = (page: React.SetStateAction<string>) => {
    setActivePage(page);
  };

  return (
    <div>
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          className="text-white-600 p-2 rounded-md "
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <MdOutlineClose className="w-6 h-6" />
          ) : (
            <MdOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-500  z-20 w-60 md:w-auto md:flex md:flex-col md:justify-center md:items-center ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full mb-60 ml-2 ">
          <div className="py-28 ">
            <Image src={'/Screenshot.png'}
            alt="logo"
            width={150}
            height={20}
            className="rounded-lg object-contain -m-4 w-36 mt-2"
            />
            
          </div>

          <div className="mb-72  space-y-6">
          <Link href="/home">
            <div
              className={`flex mb-2 justify-start items-center gap-6 pl-5 hover:bg-sky-500 hover:text-white p-3  group cursor-pointer  md:pl-0 ${
                activePage === "home" ? "bg-sky-500  text-white" : ""
              }`}
              onClick={() => handlePageClick("home")}
            >
           
              <AiFillHome className="text-2xl fill-white ml-5" />
              
              <h3 className="w-24 h-6 text-xl font-normal font-['Sanchez'] text-white">
                Overview
              </h3>
            </div>
            </Link>
            <Link href="/dataRecords">
            <div
              className={`flex mb-2 justify-start items-center gap-6 pl-5 hover:bg-sky-500 hover:text-white p-3 group cursor-pointer  md:pl-0 ${
                activePage === "data" ? "bg-sky-500 text-white" : ""
              }`}
              onClick={() => handlePageClick("data")}
            >
              <SiAlwaysdata className="text-2xl fill-white ml-5" />
              
              <h3 className="w-32 h-6 text-xl font-normal font-['Sanchez'] text-white">
                Data Records
              </h3>
            </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
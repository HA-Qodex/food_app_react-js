import React from "react";
import NavBar from "./NavBar";
import Logo from "../img/logo.png";
import Avater from "../img/avatar.png";
import { BsBasket2Fill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between h-16 items-center p-6">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-10 w-10" />
        <h3 className="text-lg font-semibold ml-2">City</h3>
      </div>
      <div className="flex items-center">
        <NavBar />
        <div className="relative flex items-center pr-8">
          <BsBasket2Fill className="text-2xl cursor-pointer" />
          <div className=" -top-3 right-8 h-5 w-5 bg-red-600 absolute rounded-full text-center">
            <p className="text-sm text-white font-semibold text-center">8</p>
          </div>
        </div>
        
        <img src={Avater} alt="profile" className="object-cover shadow-md cursor-pointer shadow-gray-500 h-8 w-8 min-w-[30px] min-h-[30px] rounded-full"/>
        
      </div>
    </div>
  );
}

export default Header;

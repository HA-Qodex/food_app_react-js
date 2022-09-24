import React from "react";
import NavBar from "./NavBar";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import { BsBasket2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/user/UserSlice";

function Header() {
  const user = useSelector((state) =>state.userReducer.user);
  const dispatch = useDispatch();
  const login = async () => {
    dispatch(getUserData());
  };

  return (
    <div className="flex justify-between h-16 items-center p-6">
      <Link to={"/"} className="flex items-center">
        <img src={Logo} alt="logo" className="h-10 w-10" />
        <h3 className="text-lg font-semibold ml-2">City</h3>
      </Link>
      <div className="flex items-center">
        <NavBar />
        <div className="relative flex items-center pr-8">
          <BsBasket2Fill className="text-2xl cursor-pointer" />
          <div className=" -top-3 right-8 h-5 w-5 bg-red-600 absolute rounded-full text-center">
            <p className="text-sm text-white font-semibold text-center">8</p>
          </div>
        </div>

        <motion.img
          onClick={login}
          whileTap={{ scale: 0.6 }}
          src={user ? user.photoURL : Logo}
          alt="avater"
          className="object-cover shadow-md cursor-pointer shadow-gray-500 h-8 w-8 min-w-[30px] min-h-[30px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;

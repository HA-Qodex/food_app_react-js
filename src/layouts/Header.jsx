import React, { useState } from "react";
import NavBar from "./NavBar";
import Logo from "../img/logo.png";
import { motion } from "framer-motion";
import { BsBasket2Fill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logOut } from "../features/user/UserSlice";

function Header() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [ showMenu, setShowMenu ] = useState(false);

  const menu = () => {
    setShowMenu(!showMenu);
  };

  const login = () => {
    dispatch(getUserData());
  };

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <header className="flex justify-between h-16 items-center p-6">
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
        {user ? (
          <div className="relative group" onClick={menu}>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Logo}
              alt="avater"
              className="object-cover shadow-md cursor-pointer shadow-gray-500 h-8 w-8 min-w-[30px] min-h-[30px] rounded-full"
            />
            {showMenu && (
              <motion.div 
              initial={{opacity:0, scale:0.6}}
              animate={{opacity:1, scale:1}}
              exit={{opacity:0, scale:0.6}}
              className="w-40 bg-gray-50 shadow-lg shadow-gray-500 rounded-lg flex flex-col absolute top-12 right-0">
                <Link to={"/add-new"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
              transition-all duration-100 ease-in-out text-textColor text-base "
                  >
                    <MdAdd />
                    New Item
                  </p>
                </Link>

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  <MdLogout />
                  Logout
                </p>
              </motion.div>
            )}
          </div>
        ) : (
          <div
            onClick={login}
            className="inline text-gray-600 hover:text-black cursor-pointer"
          >
            Login
          </div>
        )}
      </div>
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;

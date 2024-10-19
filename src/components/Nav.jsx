import React from "react";
import logo from "../Icons/marry logo.png";
import Home from "../Icons/home icon.png";
import Angale from "../Icons/right icon.png";
import Panel from "../Icons/panal icon.png";
import Set from "../Icons/set.png";
import Fav from "../Icons/favorite.png";
import Ana from "../Icons/data 2.jpg";
import  Gift from "../Icons/gift.png";
import Sec from "../Icons/lock.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="p-[20px] h-screen scroll-auto overflow-y-auto">
        <div className="flex gap-4 items-center ">
          <Link to="/">
            <img src={logo} className="h-[60px]" alt="logo" />
          </Link>
          <Link to="/">
            <h1 className="font-bold text-[40px]">Merry</h1>
          </Link>
        </div>
        <ul className="mt-[20px] ">
          <Link to="/">
            <li className="flex rounded-xl w-[300px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Home} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-6  font-bold w-6 bg-gray-400 rounded-full items-center justify-center flex ">
                  5
                </div>
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="flex rounded-xl w-[300px] mt-[10px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Panel} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Panel</h1>
              </div>

              <div className="flex gap-3 items-center">
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
        </ul>

        <h1 className="uppercase mt-[20px] text-lg text-gray-700">
            appilication
        </h1>
        <ul className="mt-[20px] ">
          <Link to="/">
            <li className="flex rounded-xl w-[300px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Fav} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Favorite</h1>
              </div>

              <div className="flex gap-3 items-center">
                
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="flex rounded-xl w-[300px]  justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Gift} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Gift</h1>
              </div>

              <div className="flex gap-3 items-center">
              <div className="h-6  font-bold w-6 bg-red-600 rounded-full items-center justify-center flex ">
                  5
                </div>
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="flex rounded-xl w-[300px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Sec} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Security</h1>
              </div>

              <div className="flex gap-3 items-center">
                
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="flex rounded-xl w-[300px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Ana} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Analytic</h1>
              </div>

              <div className="flex gap-3 items-center">
               
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
          <Link to="/">
            <li className="flex rounded-xl w-[300px] justify-between p-[15px] hover:text-white hover:bg-blue-950 items-center">
              <div className="flex gap-2">
                {" "}
                <img src={Set} className="h-8" alt="home" />
                <h1 className="text-xl font-semibold">Setting</h1>
              </div>

              <div className="flex gap-3 items-center">
               
                <img src={Angale} className="h-7" alt="" />
              </div>
            </li>
          </Link>
        </ul>

      </div>
    </>
  );
}

export default Nav;

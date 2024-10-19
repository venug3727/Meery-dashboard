import React from "react";
import Search from "../Icons/Search.png";
import Noti from "../Icons/Notification.png";
import Invoice from "../Icons/invoice.png"
function SearchBar() {
  return (
    <>
      <div className="flex p-[60px] justify-between items-center">
        <div className="flex items-center w-[400px] border-2 p-3 gap-5 rounded-xl">
          <img src={Search} alt="search" className="h-5" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex justify-center items-center h-[50px] w-[50px] border-2 rounded-full">
          <div className="flex z-50 mt-[-40px]  bg-red-600 rounded-full h-2 w-2 p-2 text-white items-center justify-center">2</div>
            <img src={Noti} alt="notification" className="mr-[15px]" />
          </div>
          <div className="flex justify-center items-center h-[50px] w-[50px] border-2 rounded-full">
            <div className="flex z-50 mt-[-40px]  bg-red-600 rounded-full h-2 w-2 p-2 text-white items-center justify-center">2</div>
            <img src={Invoice} alt="notification" className="mr-[15px]" />
          </div>
          <div className="flex bg-slate-200 justify-center items-center h-[50px] w-[50px] border-2 rounded-full">
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SearchBar;

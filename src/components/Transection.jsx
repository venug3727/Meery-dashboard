import React from "react";

function Transection({name, secName}) {
  return (
    <>
      <div className="flex items-center   justify-between ">
        <div className="flex  items-center  gap-3">
          <div className="h-[40px] w-[40px] bg-slate-300 rounded-full"></div>
          <div className="flex flex-col">
            <h1 className="capitalize font-bold text-lg">{name}</h1>
            <h2 className="capitalize text-slate-600 font-semibold">{secName}</h2>
          </div>
        </div>

        <h1 className="leading-relaxed text-lg font-semibold">+$2,123</h1>
        
      </div>
      <hr className="mt-[10px] mb-4 " />
    </>
  );
}

export default Transection;

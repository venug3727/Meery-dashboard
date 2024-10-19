import React from "react";
import Dot from "../Icons/more.png";
import Sub from "../Icons/subtract.png";
import Gro from "../Icons/arrow bold.png";
function BalanceCard({ ammount, percent, head, bgColor1, bgColor2 }) {
  const cardStyle = {
    background: `linear-gradient(45deg, ${bgColor1}, ${bgColor2})`,
  };
  return (
    <>
      <div className="bg-gradient-to-bl w-[330px] p-[20px] rounded-xl" style={cardStyle}>
        <div className="flex items-center  justify-between">
          <h1 className="text-xl text-white ">{head}</h1>
          <img src={Dot} alt="more" />
        </div>
        <div className="flex mt-[20px] justify-between items-center">
          <div className=" gap-4 items-center">
            <div className="flex justify-between">
              <h1 className="text-white text-2xl font-semibold">$ {ammount}</h1>
              <div className="flex  items-center">
                <img src={Gro} className="h-6" alt="arrow" />
                <h1 className="text-white font-semibold text-sm">{percent}%</h1>
              </div>
            </div>
            <h1 className="text-gray-300">This Month</h1>
          </div>
          <img src={Sub} alt="fig" className="c" />
        </div>
      </div>
    </>
  );
}

export default BalanceCard;

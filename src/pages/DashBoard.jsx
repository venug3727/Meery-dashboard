import React from "react";
import Nav from "../components/Nav";
import BalanceCard from "../components/BalanceCard";
import SearchBar from "../components/SearchBar";
import RevenueChart from "../components/RevenueChart";
import AllocatedDoughnut from "../components/AllocatedChart";
import AllocatedChart from "../components/AllocatedChart";
import Transection from "../components/Transection";
import DayChart from "../components/DayChart";
import WeakChart from "../components/WeakChart";

function DashBoard() {
  return (
    <>
      <div className="flex ">
        <div className="w-[350px] flex">
          <Nav />
        </div>
        <div className="c"></div>
        <div className="ml-[-20px]">
          <div className="w-full mt-[-30px]">
            <SearchBar />
          </div>
          <div className="w-full justify-between gap-4 mt-[-40px]  flex h-[150px]">
            <BalanceCard
              ammount="21,550"
              percent="52.5"
              head="Total Balance"
              bgColor1="#E54BBA"
              bgColor2="#FF974B"
            />
            <BalanceCard
              ammount="21,550"
              percent="52.5"
              head="Total Balance"
              bgColor1="#DA79FF"
              bgColor2="#7200E4"
            />
            <BalanceCard
              ammount="21,550"
              percent="52.5"
              head="Total Balance"
              bgColor1="#798AFF"
              bgColor2="#4056FF"
            />
          </div>
          <div className="flex ">
            <div className="mt-[30px] h-[100px] w-[690px] ">
              <RevenueChart />
            </div>
            <div className="h-[200px] mt-[30px] ml-[20px]  w-[200px]">
              <AllocatedChart />
            </div>
          </div>
          <div className=" w-[300px] ml-[710px] justify-center flex flex-col p-4 rounded-xl mt-[120px]  border-2">
            <h1 className="text-xl font-bold mb-[20px]">Transection</h1>
            <Transection name="jacob jones" secName="jacob jones" />
            <Transection name="jacob jones" secName="jacob jones" />
            <Transection name="jacob jones" secName="jacob jones" />
            <Transection name="jacob jones" secName="jacob jones" />
            <button className="bg-orange-200 text-orange-600 rounded-xl p-[10px] text-lg font-bold">
              View All
            </button>
          </div>
          <div className="flex gap-5">
          <div className="border-2 p-5 rounded-xl w-[350px] h-[300px] mt-[-350px]">
            <DayChart />
          </div>
          <div className="border-2 p-5 rounded-xl w-[320px] h-[300px] mt-[-350px]">
            <WeakChart />
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default DashBoard;

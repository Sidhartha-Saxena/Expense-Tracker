import React, { useEffect } from "react";
import Graph from "./Graph";
import History from "./History";
import { useGlobalContext } from "../context/globalContext";

export default function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center mb-4">All Transactions</h1>
      <div className="flex flex-col  lg:grid lg:grid-cols-5 gap-8">
        <div className="col-start-1 col-end-4 flex flex-col gap-2">
          <Graph />
          <div className="grid grid-cols-4 gap-4 mt-2"> 
            <div className="col-span-2 flex flex-col p-1 bg-teal-50 border-teal-400 border-2 rounded-xl justify-center items-center w-full  shadow-md">
              <h2 className="text-md lg:text-2xl font-bold">Total Income</h2>
              <p className="text-base md:text-2xl font-bold lg:font-extrabold text-[#42AD00]">$ {totalIncome()}</p>
            </div>
            <div className="col-span-2 flex flex-col p-1 bg-teal-50 border-teal-400 border-2 rounded-xl justify-center items-center w-full  shadow-md">
              <h2 className="text-md lg:text-2xl font-bold">Total Expense</h2>
              <p className="text-base md:text-2xl font-bold lg:font-extrabold text-red-500">$ {totalExpenses()}</p>
            </div>
            <div className="col-start-2 col-end-4 flex flex-col p-1 bg-teal-50 border-teal-400 border-2 rounded-xl justify-center items-center w-full  shadow-md">
              <h2 className="text-md lg:text-2xl font-bold">Balance</h2>
              <p className="text-base md:text-2xl font-bold lg:font-extrabold" style={{color:totalBalance()>0?'#42AD00':'rgb(239,68,68)'}}>$ {totalBalance()}</p>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-[-1] flex flex-col gap-4">
          <History />
          <div className="flex flex-col gap-2">
            <div className="p-2 bg-teal-50 border-teal-400 border-2 rounded-xl w-full shadow-md">
              <h2 className="flex justify-between items-center text-lg md:text-xl font-semibold">Min<span className="text-md lg:text-2xl font-bold text-[#42AD00]">Salary</span>Max</h2>
              <div className="flex justify-between items-center px-1">
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                $ {incomes.length>0?Math.min(...incomes.map(item => item.amount)):0}
                </p>
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                $ {incomes.length>0?Math.ceil(totalIncome()/incomes.length):0}
                </p>
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                $ {incomes.length>0?Math.max(...incomes.map(item => item.amount)):0}
                </p>
              </div>
            </div>
            <div className="p-2 bg-teal-50 border-teal-400 border-2 rounded-xl w-full shadow-md">
              <h2 className="flex justify-between items-center text-md lg:text-xl font-semibold">Min<span className="text-md lg:text-2xl font-bold text-red-500">Expense</span>Max</h2>
              <div className="flex justify-between items-center px-1">
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                ${expenses.length>0?Math.min(...expenses?.map(item => item.amount)):0}
                </p>
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                ${expenses.length>0?Math.ceil(totalExpenses()/expenses?.length):0}
                </p>
                <p className="text-md lg:text-xl font-bold text-[#222260]">
                ${expenses.length>0?Math.max(...expenses?.map(item => item.amount)):0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

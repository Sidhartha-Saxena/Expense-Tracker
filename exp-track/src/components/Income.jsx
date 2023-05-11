import React, { useEffect } from "react";
import Form from "./Form";
import { useGlobalContext } from "../context/globalContext";
import IncomeItems from "./IncomeItems";

export default function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-2">Incomes</h1>
      <h2 className="font-semibold text-2xl bg-teal-50 border-teal-400 border-2 rounded-xl text-center p-1 bg-transparent shadow-lg">
        Total Income: <span className="text-[#42AD00] font-extrabold">+${totalIncome()}</span>
      </h2>
      <div className="flex flex-col gap-4 mt-6 lg:flex-row h-[900px] lg:h-[500px] overflow-hidden">
        <div>
          <Form type={'income'}/>
        </div>
        <div className="w-full h-full flex-col overflow-y-scroll p-1 ">
          {incomes?.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            return (
              <IncomeItems
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

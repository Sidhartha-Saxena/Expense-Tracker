import React, { useEffect } from "react";
import Form from "./Form";
import { useGlobalContext } from "../context/globalContext";
import IncomeItems from "./IncomeItems";

export default function Expense() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-2">Expense</h1>
      <h2 className="font-semibold text-2xl border-teal-400 border-2 rounded-xl text-center p-1 bg-transparent shadow-lg">
        Total Expense: <span className="text-red-600 font-extrabold">-${totalExpenses()}</span>
      </h2>
      <div className="flex flex-col gap-4 mt-6 lg:flex-row h-[900px] lg:h-[500px] overflow-hidden">
        <div>
          <Form type={'expense'}/>
        </div>
        <div className="w-full h-full flex-col overflow-y-scroll p-1 ">
          {expenses?.map((exp) => {
            const { _id, title, amount, date, category, description, type } =
              exp;
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
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

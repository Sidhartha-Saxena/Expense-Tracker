import React from "react";
import { useGlobalContext } from "../context/globalContext";
export default function History() {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-lg lg:text-2xl bg-teal-50 border-teal-400 border-2 rounded-xl text-center p-1 bg-transparent shadow-lg">
        Recent History
      </h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="flex p-1 bg-teal-50 border-teal-400 border-2 rounded-xl justify-between items-center w-full px-2 shadow-md"
          >
            <p
              className="font-bold text-md lg:text-xl"
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              className="font-bold text-md lg:text-xl"
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-$ ${amount <= 0 ? 0 : amount}`
                : `+$ ${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}

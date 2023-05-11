import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";
import { CgAdd } from "react-icons/cg";

export default function Form({ type }) {
  const { addIncome, addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]:name==='title' ?e.target.value.toUpperCase():e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    type === "expense" ? addExpense(inputState) : addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  const { title, amount, date, category, description } = inputState;

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="w-full">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder={type === "expense" ? "Expense Title" : "Salary Title"}
          onChange={handleInput("title")}
          className="w-full"
        />
      </div>
      <div className="w-full">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={type === "expense" ? "Expense Amount" : "Salary Amount"}
          onChange={handleInput("amount")}
          className="w-full"
        />
      </div>
      <div className="w-full">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
          className="w-full"
        />
      </div>
      {type === "expense" ? (
        <div className="flex justify-end w-full">
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
            className="w-full"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>
      ) : (
        <div className="flex justify-end w-full">
          <select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput("category")}
            className="w-full"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}
      <div className="w-full h-full">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="25"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      {type === "expense" ? (
        <div className="w-full shadow-md rounded-full">
          <button className="buttonStyle flex gap-2 justify-center w-full p-2 hover:bg-red-500 hover:text-teal-50 rounded-full text-center hover:border-none">
            <CgAdd style={{ fontSize: "inherit" }} />
            Add Expense
          </button>
        </div>
      ) : (
        <div className="w-full shadow-md rounded-full">
          <button className="buttonStyle flex gap-2 justify-center w-full p-2 hover:bg-[#42AD00] hover:text-teal-50 rounded-full text-center hover:border-none">
            <CgAdd style={{ fontSize: "inherit" }} />
            Add Income
          </button>
        </div>
      )}
    </form>
  );
}
// name={"Add Income"}
// icon={plus}
// bPad={".8rem 1.6rem"}
// bRad={"30px"}
// bg={"var(--color-accent"}
// color={"#fff"}

import React from "react";
import moment from "moment";
import {
  GiBerriesBowl,
  GiBookshelf,
  GiMoneyStack,
  GiBus,
  GiKnifeFork,
} from "react-icons/gi";
import { IoIosLaptop, IoIosWallet } from "react-icons/io";
import {
  BsGraphUpArrow,
  BsFillGearFill,
  BsCurrencyDollar,
  BsCalendar3,
  BsChatLeftDots,
  BsTrash3,
  BsDot,
} from "react-icons/bs";
import {
  FaHandHoldingMedical,
  FaPiggyBank,
  FaBitcoin,
  FaCcVisa,
  FaYoutube,
  FaTv,
  FaTshirt,
  FaRegDotCircle,
} from "react-icons/fa";
const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export default function IncomeItems({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return <GiMoneyStack />;
      case "freelancing":
        return <IoIosLaptop />;
      case "investments":
        return <FaPiggyBank />;
      case "stocks":
        return <BsGraphUpArrow />;
      case "bitcoin":
        return <FaBitcoin />;
      case "bank":
        return <FaCcVisa />;
      case "youtube":
        return <FaYoutube />;
      case "other":
        return <IoIosWallet />;
      default:
        return <FaRegDotCircle />;
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return <GiBookshelf />;
      case "groceries":
        return <GiBerriesBowl />;
      case "health":
        return <FaHandHoldingMedical />;
      case "subscriptions":
        return <FaTv />;
      case "takeaways":
        return <GiKnifeFork />;
      case "clothing":
        return <FaTshirt />;
      case "travelling":
        return <GiBus />;
      case "other":
        return <BsFillGearFill />;
      default:
        return <FaRegDotCircle />;
    }
  };

  return (
    <div className="flex gap-2 p-1 bg-teal-50 border-teal-400 border-2 rounded-xl mb-2 justify-center items-center w-full px-2 shadow-md">
      <div className="text-xl md:text-5xl text-teal-900">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="flex flex-col flex-1">
        <h5 className="text-md md:text-xl font-semibold flex items-center">
          {type === "expense" ? (
            <BsDot className="text-red-700 " />
          ) : (
            <BsDot className="text-green-500 " />
          )}
          {title}
        </h5>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4 text-teal-950 font-medium  text-xs md:text-base">
            <p className="flex items-center">
              <BsCurrencyDollar /> {amount}
            </p>
            <p className="hidden md:flex items-center gap-1">
              <BsCalendar3 /> {dateFormat(date)}
            </p>
            <p className="md:hidden flex items-center gap-1">
              <BsCalendar3 /> {dateFormat(date).slice(0, 5)}
            </p>
            <p className="hidden md:flex items-center gap-1">
              <BsChatLeftDots /> {description}
            </p>
            <p className="md:hidden flex items-center gap-1">
              <BsChatLeftDots /> {description.slice(0, 3)}...
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            deleteItem(id);
          }}
          className="text-lg md:text-3xl outline-none text-teal-50 hover:text-teal-700 rounded-3xl bg-red-400 p-1"
        >
          <BsTrash3 />
        </button>
      </div>
    </div>
  );
}

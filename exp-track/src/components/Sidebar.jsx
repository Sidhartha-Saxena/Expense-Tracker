import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { FcBullish } from "react-icons/fc";
import { FaUserAstronaut } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const links = [
  { name: "Dashboard", to: "/", icon: FcBullish },
  { name: "Income", to: "/income", icon: GiReceiveMoney },
  { name: "Expense", to: "/expense", icon: GiPayMoney },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-5">
    {links.map((item) => (
      <NavLink
        className="flex flex-row justify-start items-center my-8 text-2xl hover:text-slate-900 font-bold"
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-1" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
export default function Sidebar() {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className="h-full md:flex hidden flex-1 flex-col w-[240px] p-6  bg-teal-50 backdrop-blur-xl bg-opacity-50 rounded-3xl border-4 border-[#24246033]">
        <div className="flex w-full justify-start items-center mt-8 font-bold">
          <FaUserAstronaut className="text-slate-950 text-3xl text-center" />
          <h1 className="text-2xl mx-2 align-bottom">Welcome!</h1>
        </div>
        <NavLinks />
      </div>
      <div className="absolute md:hidden h-full block top-4 left-2 z-50">
        {mobile ? (
          <RiCloseLine
            className="w-6 h-6 text-stone-950 mr-2"
            onClick={() => setMobile(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-stone-950 mr-2"
            onClick={() => setMobile(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-full w-2/3 bg-teal-50 backdrop-blur-xl bg-opacity-50 z-30 p-6 md:hidden smooth-transition ${
          mobile ? "left-0" : "-left-full"
        }`}
      >
        {" "}
        <div className="flex w-full justify-start items-center mt-8 font-bold">
          <FaUserAstronaut className="text-slate-950 text-3xl text-center" />
          <h1 className="text-2xl mx-2 align-bottom">Welcome!</h1>
        </div>
        <NavLinks handleClick={() => setMobile(false)} />
      </div>
    </>
  );
}

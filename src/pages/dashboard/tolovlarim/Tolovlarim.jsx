import React from "react";
import './style.css';
import { NavLink, Outlet } from "react-router-dom";

const Tolovlarim = () => {
  return (
    <div className="bg-slate-900">
      <div className="flex gap-8">
        <NavLink to={""} end={true} className={"tolov-bars"}>
          To'langan
        </NavLink>
        <NavLink to={"tolanmagan"} className={"tolov-bars"}>
          To'lanmagan
        </NavLink>
      </div>
      <div className="bg-white w-full h-[calc(100vh-80px)] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Tolovlarim;

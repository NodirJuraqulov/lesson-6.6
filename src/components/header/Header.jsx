import React from "react";
import { Link, NavLink } from "react-router-dom";
import menu from "../../assets/hamburger.jpg";
import "./style.css";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-2xl font-bold" to="/">
          Logoo
        </Link>

        <div className="flex gap-10 items-center">
          <img className="w-6 h-6 sm:hidden" src={menu} alt="hamburger" />

          <div className="hidden sm:flex gap-10 items-center">
            <NavLink className={"header-link text-xl"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"header-link text-xl"} to={"/recipes"}>
              Recipes
            </NavLink>
            <NavLink className={"header-link text-xl"} to={"/users"}>
              Users
            </NavLink>
            <NavLink className={"header-link text-xl"} to={"/posts"}>
              Posts
            </NavLink>
            <NavLink className={"header-link text-xl"} to={"/login"}>
              Login
            </NavLink>
            <NavLink className={"header-link text-xl"} to={"/dashboard"}>
              Dashboard
            </NavLink>
          </div>

          <button className="text-2xl cursor-pointer">🌙</button>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import menu from "../../assets/hamburger.jpg"

const Header = () => {
  return (
    <header className='bg-slate-800 text-white p-4 w-full fixed top-0 z-10'>
        <div className='container mx-auto flex items-center justify-between'>
            <Link to="/">Logoo</Link>

            <div className='flex gap-10 items-center'>
                <img className='w-6 h-6 sm:hidden' src={menu} alt="hamburger" />

                <div className='hidden sm:flex gap-10 items-center'>
                    <NavLink className={"header-link"} to={"/"}>Home</NavLink>
                    <NavLink className={"header-link"} to={"/users"}>Users</NavLink>
                    <NavLink className={"header-link"} to={"/recipes"}>Recipes</NavLink>
                    <NavLink className={"header-link"} to={"/posts"}>Posts</NavLink>
                    <NavLink className={"header-link"} to={"/login"}>Login</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default React.memo(Header)
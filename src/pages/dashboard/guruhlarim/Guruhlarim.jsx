import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const Guruhlarim = () => {
  return (
    <div className="bg-gray-300 pl-5">
      <div className="flex gap-8 h-18 items-center">
        <NavLink to={""} end={true} className={"guruh-bars py-3 px-8"}>
          Faol
        </NavLink>
        <NavLink to={"tugagan"} className={"guruh-bars py-3 px-8"}>
          Tugagan
        </NavLink>
      </div>
      <div className="w-full h-[calc(100vh-80px)] px-4 border-t-1 border-gray-400 mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Guruhlarim
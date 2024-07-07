import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDownWideLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SideNav = () => {
    const [isOpenDashboard, setOpenDashboard] = useState(false);
  return (
    <div className="w-96 flex flex-col">
        <NavLink onClick={()=>setOpenDashboard(!isOpenDashboard)} className={`flex items-center bg-blue-400 p-2 rounded-lg`} to="/">
          Dashboard <span>{isOpenDashboard ? <IoIosArrowUp />:<RiArrowDownWideLine />}</span>
        </NavLink>
        {
            isOpenDashboard && <div className="flex flex-col bg-blue-400 p-2 rounded-b-lg">
                <NavLink>Hello 1</NavLink>
                <NavLink>Hello 1</NavLink>
                <NavLink>Hello 1</NavLink>
                <NavLink>Hello 1</NavLink>
            </div>
        }
        <NavLink to="/ecomerce">Ecommerce</NavLink>
        <NavLink to="/project/manage">Project Manage</NavLink>
      </div>
  );
};

export default SideNav;

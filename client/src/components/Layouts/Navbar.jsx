import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <header className="flex items-center gap-5 bg-white border-b border-gray-200/50 backdrop-blur-sm py-4 px-7 sticky top-0 z-30">
      <button
        aria-label={openSideMenu ? "Close menu" : "Open menu"}
        className="block lg:hidden text-black focus:outline-none focus:ring-2 focus:ring-primary rounded"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h1 className="text-lg font-semibold text-black">Expense Tracker</h1>

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-64 h-full bg-white shadow-lg z-40">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;

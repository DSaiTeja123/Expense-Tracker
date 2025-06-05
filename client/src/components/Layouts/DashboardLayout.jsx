import React, { useContext } from "react";
import { UserContext } from "../../context/useContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

function DashboardLayout({ children, activeMenu }) {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex flex-1">
          <div className="hidden xl:block xl:w-60">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <main className="flex-grow mx-5">{children}</main>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;

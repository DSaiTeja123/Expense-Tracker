import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/useContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <aside className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center gap-3 mt-4 mb-6">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={`${user.fullName}'s profile`}
            className="w-20 h-20 rounded-full object-cover border shadow-md"
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}
        <h5 className="text-lg font-medium text-gray-800">
          {user?.fullName || ""}
        </h5>
      </div>

      <nav className="flex flex-col gap-2" aria-label="Main navigation">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary ${
              activeMenu === item.label
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handleClick(item.path)}
            aria-current={activeMenu === item.label ? "page" : undefined}
          >
            <item.icon className="text-lg" aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;

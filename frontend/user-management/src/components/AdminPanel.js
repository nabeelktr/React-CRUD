import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import AdminTable from "./AdminTable";

const AdminPanel = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };
  return (
    <>
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Admin Panel
            </span>
          </span>
          <div className="flex items-center ">
            <span className="mr-2 text-sm">{admin.name}</span>
            <img className="w-8 h-8 rounded-full" src={admin.img} alt="admin" />

            <button
              onClick={logout}
              className="text-white py-2 px-4 text-xs scale-90 ml-3  uppercase rounded bg-gray-500 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Logout
              <span className="text-blueGray-400 ml-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="text-xs scale-90"
                />
              </span>
            </button>
          </div>
        </div>
      </nav>
        <AdminTable/>


    </>
  );
};

export default AdminPanel;

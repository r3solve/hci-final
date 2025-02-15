import { Folder, CheckSquare, Archive, Trash2, Home } from "lucide-react";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../compenents/BreadCrumb";

function Capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Layout() {
  const location = useLocation();
  const path = Capitalize(location.pathname.split("/").filter((i) => i)[0]);

  const breadcrumbItems = [
    { href: "#", icon: Home, label: "Home" },
    { label: path }, // No href for the last item, indicating the current page
  ];
  return (
    <div className="flex h-screen overflow-y-hidden">
      <aside className="w-[28%] bg-[#F8F8FB] p-4">
        <h1 className="text-center text-2xl text-gray-800 font-bold">
          Tree Manager
        </h1>
        <div className="flex items-center mb-8 mt-12 w-full ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-24 mx-auto rounded-md"
          />
        </div>
        <nav className="h-screen">
          <ul className="ms-1 border-l ">
            <NavLink
              to={"tasks"}
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2" : "mb-1 flex p-2"
              }
            >
              <CheckSquare className="w-6 h-6" />
              <span className="ml-2">Tasks</span>
            </NavLink>
            <NavLink
              to={"collections"}
              className={({ isActive }) =>
                isActive
                  ? "mb-1 flex p-2 ml-2 transition-all  duration-200  "
                  : "mb-1 flex p-2"
              }
            >
              <Folder className="w-6 h-6" />
              <span className="ml-2">Folders</span>
            </NavLink>
            <NavLink
              to={"archived"}
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2 transition-all" : "mb-1 flex p-2"
              }
            >
              <Archive className="w-6 h-6" />
              <span className="ml-2">Archived</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2 transition-all" : "mb-1 flex p-2"
              }
              to={"deleted"}
            >
              <Trash2 className="w-6 h-6" />
              <span className="ml-2">Deleted</span>
            </NavLink>
          </ul>
        </nav>
        <div>
          <p className="">
            All Rights Reserved Abdul Haque Yahaya Yelpoea HCI Project 2025
          </p>
        </div>
      </aside>
      <main className="w-full ">
        <div className="h-14 shadow-md">
          <div className="relative w-full p-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none "></div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:border-none block w-full ps-10 p-2.5 active:border-none "
              placeholder="Search branch name..."
              required
            />
          </div>
        </div>
        <div className="mt-4 ms-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="overflow-y-auto h-full ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;

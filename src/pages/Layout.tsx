import {
  Folder,
  CheckSquare,
  Archive,
  Trash2,
  Home,
  SkipBack,
  Sidebar,
  ListCheck,
  SidebarClose,
  ChevronDown,
} from "lucide-react";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../compenents/BreadCrumb";
import { useState } from "react";

function Capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Layout() {
  const location = useLocation();
  const path = Capitalize(location.pathname.split("/").filter((i) => i)[0]);
  const [open, setOpen] = useState(true);
  const breadcrumbItems = [
    { href: "#", icon: Home, label: "Home" },
    { label: path }, // No href for the last item, indicating the current page
  ];

  return (
    <div className="flex h-screen overflow-y-hidden">
      <aside
        className={` ${
          open ? "w-[22%] block" : "bg-[#F8F8FB] hidden p-3 transition-all"
        }`}
      >
        {" "}
        <div className="flex space-x-4 mt-4 justify-center w-full">
          <h1 className="text-center text-2xl text-gray-600 font-bold">
            Task Tree
          </h1>
          <SidebarClose
            onClick={() => setOpen(false)}
            className="text-gray-600 mt-1  hover:cursor-pointer hover:text-gray-700"
          />
        </div>
        <div className="flex ms-8  mb-8 mt-12 w-full ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-24 ms-2 rounded-md"
          />
        </div>
        <nav className="h-screen">
          <ul className="ms-8 border-l ">
            <NavLink
              to={"tasks"}
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2" : "mb-1 flex p-2"
              }
            >
              <ListCheck className="w-6 h-6 text-gray-700" />
              <span className="ml-2 text-gray-700">Tasks</span>
            </NavLink>
            <NavLink
              to={"collections"}
              className={({ isActive }) =>
                isActive
                  ? "mb-1 flex p-2 ml-2 transition-all  duration-200  "
                  : "mb-1 flex p-2"
              }
            >
              <Folder className="w-6 h-6 text-gray-700" />
              <span className="ml-2 text-gray-700">Folders</span>
            </NavLink>
            <NavLink
              to={"archived"}
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2 transition-all" : "mb-1 flex p-2"
              }
            >
              <Archive className="w-6 h-6 text-gray-700" />
              <span className="ml-2 text-gray-700">Archived</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mb-1 flex p-2 ml-2 transition-all" : "mb-1 flex p-2"
              }
              to={"deleted"}
            >
              <Trash2 className="w-6 h-6 text-gray-700" />
              <span className="ml-2 text-gray-700">Deleted</span>
            </NavLink>
          </ul>
          <div className="text-center mt-32 px-4 text-gray-600 font-light text-sm">
            <p>&copy; 2025 Abdul Haque Yahaya Yelpoea. All rights reserved.</p>
          </div>
        </nav>
        <div></div>
      </aside>
      <main className="w-full ">
        <div className="mt-4 ms-8 flex  ">
          {!open && (
            <button
              className="tooltip tooltip-bottom "
              data-tip=" open sidebar"
            >
              <Sidebar
                onClick={() => setOpen(true)}
                className="text-gray-600 mb-5 mx-2 hover:text-gray-500"
              />
            </button>
          )}

          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex flex-row space-x-1 ml-[75%]">
            <div className="text-gray-500">Yelpoea</div>
            <ChevronDown className="text-gray-600" />
          </div>
        </div>
        <div className="overflow-y-auto h-full transtion-all ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;

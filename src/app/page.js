"use client";

import { useState } from "react";
import Image from "next/image";

import Projects from "./project/page";
import SideBar from "./components/SideBar";
import GenerateShorts from "./shorts/page";
import Translate from "./translation/page";

export default function Home() {
  // Toggle sidebar function
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Replace with user auth info
  const user = {
    name: "Nguyen Khoa Dang",
    username: "username",
    avatar: "/images/spinSeele.jpg",
  };

  // Manage which component is displayed based on selected button in the sidebar
  const [selectedComponent, setSelectedComponent] = useState("Project");

  const renderContent = () => {
    switch (selectedComponent) {
      case "Translate":
        return <Translate />;
      case "Generate Shorts":
        return <GenerateShorts />;
      default:
        return <Projects />;
    }
  };

  return (
    <main>
      <div className="w-[1440px] h-[1280px] relative bg-white">
        {/* Header */}
        <div className="w-[1440px] pl-[46px] pr-[1251px] py-3 left-0 top-0 absolute bg-white rounded-[10px] shadow justify-start items-center gap-[43px] inline-flex">
          <div className="w-[38px] h-7 relative flex-col justify-start items-start flex">
            {/* Expand button */}
            <div
              className="w-[38px] h-7 relative flex-col justify-start items-start flex cursor-pointer"
              onClick={toggleSidebar}
            >
              <Image
                className="w-[38px] h-[28px]"
                src="/images/expand-button.png"
                alt="Expand Button"
                width={38}
                height={28}
              />
            </div>
          </div>
          <img
            className="w-[62px] h-[49px]"
            src="/images/batoIcon.png"
            alt="Logo"
          />
          <img
            className="w-[37px] h-[37px] left-[1358px] top-[18px] absolute rounded-[999px]"
            src={user.avatar}
            alt="User Avatar"
          />
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <SideBar
            name={user.name}
            username={user.username}
            avatar={user.avatar}
            onSelect={setSelectedComponent} // Pass the setter function to SideBar
          />
        )}

        {/* Main content */}
        {renderContent()}
      </div>
    </main>
  );
}

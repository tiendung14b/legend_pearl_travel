import { useState } from "react";
import UserCard from "../components/UserCard";
import CustomButton from "../components/CustomButton"; // Assuming this component is already created

const SideBar = ({ name, username, avatar, onSelect }) => {
  const [selected, setSelected] = useState("Project");

  const handleSelection = (selection) => {
    setSelected(selection);
    onSelect(selection); // Call the passed function to change the main content
  };

  return (
    <div class="relative">
      {/* Sidebar */}
      <div class="w-[379px] h-[781px] left-0 top-[73px] absolute bg-white">
        <div
          onClick={() => handleSelection("Translate")}
          class={`w-[299px] h-[53px] left-[40px] top-[289px] absolute rounded-[5px] cursor-pointer ${
            selected === "Translate"
              ? "bg-[#f37b8f]/20 text-[#ff002a]"
              : "bg-[#f37b8f]/0 text-black hover:bg-[#f37b8f]/10"
          }`}
        >
          <div class="left-[48px] top-[16px] absolute text-base font-normal font-['Nunito']">
            Translate
          </div>
        </div>

        <div
          onClick={() => handleSelection("Generate Shorts")}
          class={`w-[299px] h-[53px] left-[40px] top-[352px] absolute rounded-[5px] cursor-pointer ${
            selected === "Generate Shorts"
              ? "bg-[#f37b8f]/20 text-[#ff002a]"
              : "bg-[#f37b8f]/0 text-black hover:bg-[#f37b8f]/10"
          }`}
        >
          <div class="left-[48px] top-[16px] absolute text-base font-normal font-['Nunito']">
            Generate shorts
          </div>
        </div>

        <div
          onClick={() => handleSelection("Project")}
          class={`w-[299px] h-[53px] left-[40px] top-[226px] absolute rounded-[5px] cursor-pointer ${
            selected === "Project"
              ? "bg-[#f37b8f]/20 text-[#ff002a]"
              : "bg-[#f37b8f]/0 text-black hover:bg-[#f37b8f]/10"
          }`}
        >
          <div class="left-[48px] top-[16px] absolute text-base font-normal font-['Nunito']">
            Project
          </div>
        </div>

        <div class="w-[212px] h-[37px] left-[46px] top-[126px] absolute">
          <CustomButton label="New Project" />
        </div>

        <UserCard name={name} username={username} avatar={avatar} />
      </div>
    </div>
  );
};

export default SideBar;

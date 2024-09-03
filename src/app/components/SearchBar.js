import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[340px] h-[41px] left-0 top-0 bg-transparent border border-[rgba(119.21,126.44,144.50,0.40)] rounded-[5px]"></div>
      <div className="absolute w-[24px] h-[24px] left-[14px] top-[9px] flex items-center justify-center">
        <svg
          className="w-[16px] h-[16px] text-[rgba(0,0,0,0.50)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="absolute left-[53px] top-[11px] bg-transparent text-[rgba(0,0,0,0.40)] text-[14px] font-nunito font-bold outline-none"
        style={{ width: "270px" }}
      />
    </div>
  );
};

export default SearchBar;

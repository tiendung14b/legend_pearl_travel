"use client";

import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "api/api";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser(token)
        .then((data) => {
          setUser(data);
          console.log("User:", data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  // const handleAuthAction = () => {
  //   if (user) {
  //     logout();
  //     setUser(null);
  //     console.log("Logged out successfully");
  //   } else {
  //     router.push("/login");
  //   }
  // };

  return (
    <div class="fixed z-10 bg-white w-[100vw] mb-[100%] shadow-md">
      <div class="py-[12px] content flex justify-between">
        <img src="/images/favicon.png" class="h-[36px]" alt="" />
        {/* <button
          className=" text-black text-[14px] font-semibold border-[2px] border-[#F37B8F] rounded-full px-3 py-1"
          onClick={handleAuthAction}
        >
          {user ? "Log out" : "Log in"}
        </button> */}
      </div>
    </div>
  );
}

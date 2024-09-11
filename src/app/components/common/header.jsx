"use client";

import { useState, useEffect } from "react";
import { getCurrentUser } from "api/api";

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

  const userGuest = {
    full_name: "Guest",
    username: "guest",
    avatar: "/images/guest_icon.png",
  };

  const currentUser = user || userGuest;

  return (
    <div class="fixed z-10 bg-white w-[100vw] mb-[100%] shadow-md">
      <div class="py-[12px] content flex justify-between">
        <img src="/images/favicon.png" class="h-[36px]" alt="" />
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="flex flex-row justify-between p-4 border-b-1 border-slate-500 items-center bg-background mt-14 ">
      <a
        className={`font-bold fustat hover:cursor-pointer ${active === "home" ? "underline" : ""}`}
        onClick={() => setActive("home")}
      >
        HOME
      </a>
      <div className="flex flex-row justify-end gap-4 items-center">
        <a
          className={`font-bold fustat hover:cursor-pointer ${active === "about" ? "underline" : ""}`}
          onClick={() => setActive("about")}
        >
          ABOUT US
        </a>
      </div>
    </nav>
  );
}

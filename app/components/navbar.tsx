"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="flex flex-row justify-between p-4 border-b-1 border-slate-500 items-center bg-background mt-14 ">
      <Link
        className={`font-bold fustat hover:cursor-pointer ${active === "home" ? "underline" : ""}`}
        onClick={() => setActive("home")}
        href="/"
      >
        HOME
      </Link>
      <div className="flex flex-row justify-end gap-4 items-center">
        <a
          className={`font-bold fustat hover:cursor-pointer ${active === "about" ? "underline" : ""}`}
          onClick={() => setActive("about")}
          href="#about"
        >
          ABOUT US
        </a>
      </div>
    </nav>
  );
}

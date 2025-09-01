"use client";
import Link from "next/link";
import { useNavStore } from "../stores/useNavStore";

export default function NavBar() {
  const { currentTab, setCurrentTab } = useNavStore();
  const tabs = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ];
  return (
    <nav className="flex flex-row justify-between p-4 px-10 border-b-1 border-slate-500 items-center bg-background mt-14 ">
      {tabs.map((tab) => (
        <li key={tab.name} className="list-none">
          <Link
            href={tab.href}
            onClick={() => setCurrentTab(tab.name)}
            className={`${currentTab === tab.name ? "underline" : ""} font-bold fustat hover:cursor-pointer`}
          >
            {tab.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </nav>
  );
}

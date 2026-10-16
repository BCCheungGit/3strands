"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNavStore } from "../stores/useNavStore";

type NavBarProps = {
  variant?: "default" | "light";
};

export default function NavBar({ variant = "default" }: NavBarProps) {
  const { currentTab, setCurrentTab } = useNavStore();
  const tabs = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ];
  return (
    <nav
      className={cn(
        "flex flex-row justify-between p-4 sm:px-10 px-2 border-b-1 items-center mt-8 sm:mt-14",
        variant === "light"
          ? "border-white text-white"
          : "border-slate-500 bg-background",
      )}
    >
      {tabs.map((tab) => (
        <li key={tab.name} className="list-none">
          <Link
            href={tab.href}
            onClick={() => setCurrentTab(tab.name)}
            className={`${currentTab === tab.name ? "underline" : ""} font-bold fustat text-2xl hover:cursor-pointer`}
          >
            {tab.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </nav>
  );
}

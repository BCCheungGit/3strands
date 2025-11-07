"use client";
import { Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function BottomBar() {
  return (
    <nav className="w-full py-20 mt-10 flex items-center justify-center bottom-0 z-20 border-t-1">
      <div className="w-full gap-10 flex px-10 sm:px-20 justify-between items-center">
        <div className="flex fustat flex-row text-nowrap items-center justify-center gap-1 text-[12px]">
          <Copyright size={16} />
          3Strands. 2025
        </div>
        <div className="flex text-nowrap flex-row items-center justify-center gap-2 fustat">
          <a
            href="https://www.instagram.com/threestrandsclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="fustat flex flex-row gap-2 items-center justify-center"
          >
            <p>Find us on</p>

            <Image
              src="/instagram.png"
              alt="Instagram"
              height={20}
              width={20}
              className="h-[20px] w-[20px]"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

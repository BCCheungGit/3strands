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
          <p>Find us on</p>
          <a
            href="https://www.instagram.com/threestrandsclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <Image
              src="/instagram.png"
              alt="instagram logo"
              height={50}
              width={50}
              className="sm:w-8 sm:h-8 w-4 h-4 cursor-pointer hover:opacity-70"
            />
          </a>
        </div>
        <Button
          variant="link"
          className="fustat"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </Button>
      </div>
    </nav>
  );
}

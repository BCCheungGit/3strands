"use client";
import { Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";
export function BottomBar() {
  return (
    <nav className="w-full py-20 mt-10 flex items-center justify-center bottom-0 z-20 border-t-1">
      <div className="w-full gap-10 flex px-20 justify-between items-center">
        <div className="flex fustat flex-row text-nowrap items-center justify-center gap-1 text-[12px]">
          <Copyright size={16} />
          3Strands. 2025
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

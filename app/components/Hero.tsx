import NavBar from "./Navbar";
import { ParallaxBackground } from "./ParallaxBackground";
import { ScrollDriftOut } from "./ScrollDriftOut";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col">
      <ParallaxBackground src="/hero.jpg" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      <div className="px-4 sm:px-10">
        <NavBar variant="light" />
      </div>

      <ScrollDriftOut className="flex flex-1 items-center justify-center px-4 pb-16">
        <h1 className="flex flex-col items-center text-center text-[clamp(3rem,min(12vw,16svh),8rem)] leading-tight text-white">
          <span className="font-serif font-bold">3 Strands</span>
          <span className="text-nowrap">
            <span className="font-serif font-bold">Social</span>{" "}
            <span className="font-script text-[1.25em]">Club</span>
          </span>
        </h1>
      </ScrollDriftOut>
    </section>
  );
}

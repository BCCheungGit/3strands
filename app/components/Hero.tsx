import Image from "next/image";
import NavBar from "./Navbar";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/40" />

      <div className="px-4 sm:px-10">
        <NavBar variant="light" />
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-16">
        <h1 className="flex flex-col items-center text-center leading-tight text-white">
          <span className="font-serif text-5xl font-bold sm:text-8xl md:text-9xl">
            3 Strands
          </span>
          <span className="text-nowrap">
            <span className="font-serif text-5xl font-bold sm:text-8xl md:text-9xl">
              Social
            </span>{" "}
            <span className="font-script text-6xl sm:text-9xl md:text-[10rem]">
              Club
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}

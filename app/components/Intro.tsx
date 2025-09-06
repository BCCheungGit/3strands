import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";

export function Intro() {
  return (
    <div className="flex flex-col mb-10">
      <section className="h-fit py-8 flex flex-col items-center px-2 sm:px-20 gap-6">
        <div className="flex items-center justify-center gap-10">
          <BoxReveal duration={0.8} boxColor="#030689">
            <div className="text-4xl sm:text-6xl md:text-8xl font-bold fustat text-center">
              Three Strands
            </div>
          </BoxReveal>
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40">
            <Image src="/logo.png" alt="logo for 3strands" fill />
          </div>
        </div>

        <BoxReveal duration={0.8} boxColor="#030689">
          <p className="fustat text-center sm:text-2xl text-lg max-w-2xl">
            We believe that strong connections come from that common foundation
            of faith. Skip the apps, and searching in the wrong places. Come to
            a Three Strands speed dating event and meet new friends!
          </p>
        </BoxReveal>
      </section>
    </div>
  );
}

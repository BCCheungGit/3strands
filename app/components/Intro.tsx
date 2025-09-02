import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="h-fit py-8 flex flex-col md:flex-row justify-between items-center px-2 sm:px-20 gap-6">
      <div className="flex flex-col gap-6 sm:items-start items-center sm:mt-0 mt-10">
        <div className="flex items-center gap-4 md:hidden">
          <BoxReveal duration={0.8} boxColor="#030689">
            <div className="text-5xl sm:text-8xl font-bold fustat">
              3Strands
            </div>
          </BoxReveal>
          <div className="relative w-26 h-26 sm:w-34 sm:h-34">
            <Image src="/logo.png" alt="logo for 3strands" fill />
          </div>
        </div>

        <div className="hidden md:block">
          <BoxReveal duration={0.8} boxColor="#030689">
            <div className="text-6xl sm:text-8xl font-bold fustat">
              3Strands
            </div>
          </BoxReveal>
        </div>

        <BoxReveal duration={0.8} boxColor="#030689">
          <p className="fustat sm:text-2xl text-xl max-w-lg text-center sm:text-left">
            We believe that strong connections come from that common foundation
            of faith. Skip the apps, and searching in the wrong places. Come to
            a Three Strands speed dating event and meet new friends!
          </p>
        </BoxReveal>
      </div>

      <div className="hidden md:block relative w-48 h-48 md:w-90 md:h-90 shrink-0">
        <Image src="/logo.png" alt="logo for 3strands" fill />
      </div>
    </div>
  );
}

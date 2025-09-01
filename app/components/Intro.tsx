import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="h-fit py-8 flex flex-col sm:flex-row justify-between items-center px-8 sm:gap-0 gap-6 sm:px-20 ">
      <div className="flex flex-col gap-4 sm:gap-6 sm:items-start items-center sm:mt-0 mt-10">
        <BoxReveal duration={0.8} boxColor="#030689">
          <div className="text-6xl sm:text-8xl font-bold fustat">3Strands</div>
        </BoxReveal>
        <BoxReveal duration={0.8} boxColor="#030689">
          <p className="fustat sm:text-2xl text-xl max-w-lg">
            We believe that strong connections come from that common foundation
            of faith. Skip the apps, and searching in the wrong places. Come to
            a Three Strands speed dating event and meet new friends!
          </p>
        </BoxReveal>
      </div>
      <Image src="/logo.png" alt="logo for 3strands" width={350} height={350} />
    </div>
  );
}

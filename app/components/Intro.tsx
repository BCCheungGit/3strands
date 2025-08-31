import Image from "next/image";

export default function Intro() {
  return (
    <div className="h-96 flex flex-col sm:flex-row justify-between items-center px-8 sm:gap-0 gap-6 sm:px-20">
      <div className="flex flex-col gap-4 sm:gap-6 sm:items-start items-center sm:mt-0 mt-10">
        <div className="text-6xl sm:text-8xl font-bold fustat">3Strands</div>
        <p className="fustat text-lg max-w-lg">
          We believe that strong connections come from that common foundation of
          faith. Skip the apps, and searching in the wrong places. Come to a
          Three Strands speed dating event and meet new friends!
        </p>
      </div>
      <Image src="/logo.png" alt="logo for 3strands" width={300} height={300} />
    </div>
  );
}

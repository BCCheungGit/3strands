import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { aboutCards } from "@/app/constants";
export function WhoCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 w-full mt-10 gap-4 ">
        {aboutCards.map((card, index) => (
          <BlurFade key={index} delay={0.5}>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-10 max-w-6xl">
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="font-bold fustat text-2xl sm:text-4xl">
                  {card.title}
                </h2>
                <p className="text-lg sm:text-xl fustat">{card.description}</p>
              </div>
              {card.image && (
                <Image
                  src={card.image}
                  alt=""
                  width={400}
                  height={400}
                  className="sm:w-[500px] sm:h-[500px] w-[300px] h-[400px]"
                />
              )}
            </div>
          </BlurFade>
        ))}{" "}
      </div>
    </>
  );
}

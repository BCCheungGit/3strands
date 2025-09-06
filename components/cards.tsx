import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { aboutCards } from "@/app/constants";

export function WhoCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full mt-10">
      {aboutCards.map((card, index) => (
        <BlurFade key={card.index ?? index} delay={0.5}>
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 max-w-6xl ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-4 text-center md:text-left">
              <h2 className="font-bold fustat text-2xl sm:text-4xl">
                {card.title}
              </h2>
              <p className="text-lg sm:text-xl fustat">{card.description}</p>
            </div>

            {card.image && (
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={400}
                className="w-[500px] h-[500px] object-contain"
              />
            )}
          </div>
        </BlurFade>
      ))}
    </div>
  );
}

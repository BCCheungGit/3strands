import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { aboutCards } from "@/app/constants";
export function WhoCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-10 gap-4 ">
        {aboutCards.map((card, index) => (
          <BlurFade key={index} delay={0.5}>
            <div className="flex sm:flex-row flex-col items-center justify-center shadow-md rounded-lg p-10 gap-10 max-w-4xl">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bold fustat text-2xl sm:text-4xl">
                  {card.title}
                </h2>
                <p className="text-lg sm:text-xl fustat">{card.description}</p>
              </div>
              {card.image && (
                <Image src={card.image} alt="" width={300} height={300} />
              )}
            </div>
          </BlurFade>
        ))}{" "}
      </div>
    </>
  );
}

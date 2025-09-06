"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { aboutCards, posters } from "@/app/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
                className="md:w-[400px] md:h-[500px] w-[400px] h-[400px] object-contain"
              />
            )}
          </div>
        </BlurFade>
      ))}
    </div>
  );
}

export function PosterCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section id="upcoming" className="flex flex-col gap-10 text-center">
      <h1 className="mt-6 font-bold fustat text-3xl md:text-6xl">
        Upcoming Events
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="sm:w-3xl w-xs mx-auto max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {posters.map((poster, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-96 sm:h-[800px]">
                <Image
                  src={poster.image}
                  alt={poster.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

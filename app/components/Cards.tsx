"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image, { ImageProps } from "next/image";
import { aboutCards, posters } from "@/app/constants";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

function ImageWithLoader(props: ImageProps) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-full flex items-center justify-center">
      {loading && (
        <>
          <Spinner className="size-8" />
        </>
      )}
      <Image
        {...props}
        onLoad={() => setLoading(false)}
        className={`${props.className ?? ""} ${
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }`}
      />
    </div>
  );
}

export function WhoCard() {
  return (
    <div className="flex flex-col w-full">
      {aboutCards.map((card, index) => {
        const imageOnLeft = index % 2 === 0;
        return (
          <section
            key={card.index}
            className="flex min-h-[85svh] items-center justify-center overflow-x-clip py-8"
          >
            <div
              className={cn(
                "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl",
                !imageOnLeft && "md:flex-row-reverse",
              )}
            >
              <BlurFade
                inView
                inViewMargin="-100px"
                direction={imageOnLeft ? "right" : "left"}
                offset={40}
                duration={0.6}
                className={cn(
                  "w-full shrink-0",
                  card.orientation === "landscape" ? "max-w-2xl" : "max-w-md",
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-2xl",
                    card.orientation === "landscape"
                      ? "aspect-[1545/1024]"
                      : "aspect-[4/5]",
                  )}
                >
                  <ImageWithLoader
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes={
                      card.orientation === "landscape"
                        ? "(min-width: 768px) 672px, 100vw"
                        : "(min-width: 768px) 448px, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              </BlurFade>
              <BlurFade
                inView
                inViewMargin="-100px"
                direction={imageOnLeft ? "left" : "right"}
                offset={40}
                duration={0.6}
                delay={0.15}
              >
                <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                  <h2 className="font-serif font-bold text-3xl sm:text-5xl">
                    {card.title}
                  </h2>
                  <p className="fustat text-xl sm:text-2xl">{card.description}</p>
                </div>
              </BlurFade>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function PosterCard() {
  return (
    <div className="flex w-full justify-center items-center">
      <Image
        src="/brewedtwoND.PNG"
        alt="brewed for two event poster"
        width={500}
        height={700}
      />
    </div>
  );
}

export function PosterCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section
      id="upcoming"
      className="flex flex-col lg:mt-0 mt-10 lg:gap-0 gap-8 items-center"
    >
      <h1 className="mt-6 font-bold fustat text-3xl md:text-5xl">
        Upcoming Events
      </h1>
      <Carousel
        plugins={[plugin.current]}
        className="md:w-3xl w-2xs mx-auto max-w-6xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {posters.map((poster, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-96 md:h-[670px]">
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
      <Button className="hover:cursor-pointer p-5 mt-5">
        {" "}
        <a
          href="https://luma.com/96we248h"
          target="_blank"
          className="fustat text-lg"
        >
          Register Here{" "}
        </a>
      </Button>
    </section>
  );
}

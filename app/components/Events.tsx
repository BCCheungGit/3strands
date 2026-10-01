import { BlurFade } from "@/components/magicui/blur-fade";

const events = ["Brewed for Two", "Brewed at the Park"];

const fadeIn = {
  inView: true,
  once: false,
  inViewMargin: "-100px",
  direction: "up",
  offset: 24,
  duration: 0.4,
} as const;

const eventsStartDelay = 0.25;
const eventStagger = 0.15;

export function Events() {
  return (
    <section className="fustat flex justify-center px-6 pt-20 pb-24 sm:pt-24">
      <div className="flex w-full max-w-5xl flex-col gap-24">
        <BlurFade {...fadeIn}>
          <p className="text-center text-xl leading-snug sm:text-2xl md:text-3xl">
            We believe that strong connections come from that common foundation
            of faith. Skip searching in the wrong places. Come to a Three
            Strands dating event and meet new friends!
          </p>
        </BlurFade>
        <div className="flex flex-col gap-5">
          <BlurFade {...fadeIn} delay={0.1}>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Our Events:
            </h2>
          </BlurFade>
          <ul className="flex flex-col gap-3 text-2xl text-brand-blue sm:text-3xl md:text-4xl">
            {events.map((event, index) => (
              <li key={event}>
                <BlurFade
                  {...fadeIn}
                  delay={eventsStartDelay + index * eventStagger}
                >
                  {event}
                </BlurFade>
              </li>
            ))}
          </ul>
          <BlurFade
            {...fadeIn}
            delay={eventsStartDelay + events.length * eventStagger}
          >
            <p className="text-xl italic sm:text-2xl md:text-3xl">
              More Events Coming Soon
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

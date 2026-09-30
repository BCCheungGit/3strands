import { image } from "motion/react-client";

type AboutCard = {
  index: string;
  title: string;
  description: string;
  image: string;
  orientation: "portrait" | "landscape";
};

export const aboutCards: AboutCard[] = [
  {
    index: "c0",
    title: "WHO WE ARE",
    description:
      "We’re Elane & Janice, two friends living in nyc who want to create a space for singles to meet outside their local communities! The foundation? Faith.",
    image: "/who-we-are.jpg",
    orientation: "landscape",
  },
  {
    index: "c1",
    title: "WHAT IS 3STRANDS",
    description:
      "The meaning of Three Strands is inspired by Ecclesiastes 4:12 , where a “…cord of three strands is not quickly broken.” We believe that strong connections come from that common foundation of faith. Skip the apps, and searching in the wrong places. Come to a Three Strands speed dating event and meet new friends!",
    image: "/pic1.jpeg",
    orientation: "portrait",
  },
  {
    index: "c2",
    title: "HOW DOES THIS WORK",
    description:
      "We’ll send out a survey beforehand to best pair you with people we think you should meet. You’ll be seated in tables of 4 and rotate accordingly. There will also be opportunities to mingle with other people before and after the event is over.  ",
    image: "/pic2.JPG",
    orientation: "portrait",
  },
];

export const posters = [
  {
    image: "/brewedfortwo.png",
    alt: "brewed for two poster",
  },
  {
    image: "/whatisthis.png",
    alt: "what is this? poster",
  },
];

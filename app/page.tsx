import { BottomBar } from "./components/BottomBar";
import { PosterCarousel } from "./components/Cards";
import { Intro } from "./components/Intro";
import NavBar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen mx-10">
        <NavBar />
        <Intro />
        <PosterCarousel />
      </div>
      <BottomBar />
    </>
  );
}

import NavBar from "../components/Navbar";
import { WhoCard } from "../components/Cards";
import { BottomBar } from "../components/BottomBar";
export default function About() {
  return (
    <div className="flex flex-col min-h-screen mx-10">
      <NavBar />
      <WhoCard />
      <BottomBar />
    </div>
  );
}

import NavBar from "../components/navbar";
import { WhoCard } from "@/components/cards";
export default function About() {
  return (
    <div className="flex flex-col min-h-screen mx-10">
      <NavBar />
      <WhoCard />
    </div>
  );
}

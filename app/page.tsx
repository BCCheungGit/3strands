import Intro from "./components/Intro";
import NavBar from "./components/navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-10">
      <NavBar />
      <Intro />
    </div>
  );
}

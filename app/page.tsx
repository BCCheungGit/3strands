import { EmailSignup } from "./components/EmailSignup";
import { Events } from "./components/Events";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <EmailSignup />
    </main>
  );
}

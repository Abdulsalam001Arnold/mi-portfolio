import Contact from "../components/contact";
import BackgroundAnimation from "../components/background";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full relative z-0 pt-[4rem]">
      <BackgroundAnimation />
      <Contact />
    </div>
  );
}

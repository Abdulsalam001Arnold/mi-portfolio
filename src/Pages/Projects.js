import Project from "../components/projects";
import BackgroundAnimation from "../components/background";

export default function Projectpage() {
  return (
    <div className="min-h-screen w-full relative z-0 pt-[4rem]">
      <BackgroundAnimation />
      <Project />
    </div>
  );
}

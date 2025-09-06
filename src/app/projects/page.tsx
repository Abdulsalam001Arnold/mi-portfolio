import Reveal from "@/components/Reveal";
import BackgroundAnimation from "@/components/background";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Flexing Projects :)',
  description: 'My Prjects and contributions'
}


export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black/70 pt-[4rem] pb-[1.5rem]">
      <BackgroundAnimation />
      <h1 className="text-6xl dancing-script-topic text-white links">
        Projects (personal)
      </h1>

      <Reveal>
        <div className="px-4 flex flex-col items-center justify-center">
          <p className="text-[18px] margarine-regular mt-[2rem] sm:w-full md:w-full lg:w-[60%] text-white">
            Here is a collection of projects that showcase my skills and
            experience in full-stack web development. From small personal
            projects to large-scale applications, each project reflects my
            dedication to building efficient, scalable, and user-friendly web
            solutions.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] items-center justify-center mt-[2rem]">
        <Reveal>
          <ProjectCard
            title="Notepad"
            description="A simple, intuitive notepad app for jotting down ideas, notes, and sketches on the go. Features include Archive for Privacy, cloud sync, and customizable theme."
            technologies={[
              "Next.js15",
              "React",
              "Typescript",
              "Mongoose (ODM)",
              "Mongo DB",
              "Tailwindcss",
              "GSAP",
              "Clerk",
              "Zustand",
              "Node.js",
            ]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757089139/Notepad_-_Google_Chrome_2025-09-05_17-05-01_rzqrbr.mp4"
            link="https://note-pad-jade.vercel.app/"
          />
        </Reveal>

        <Reveal>
          <ProjectCard
            title="FOTO-C APP"
            description={`I contributed to this project while working at a former company. The platform was built to connect photographers, editors, and users bringing them closer together in a collaborative space. It enables professionals to showcase their portfolios, share edits, and engage with users who are seeking creative talent.
            
            My contributions played a key role in the platform’s success, helping shape the user experience and functionality in a way that made the project one of the most impactful initiatives I’ve worked on.
            `}
            technologies={[
              "React",
              "Javascript",
              "Mongo DB",
              "Tailwindcss",
              "framer-motion",
              "Zustand",
              "GSAP",
            ]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757091642/project_t2pija.mp4"
            link="https://app.foto-c.com"
          />
        </Reveal>

        <Reveal>
          <ProjectCard
            title="Archbuild"
            description="This was my final full-stack project, officially approved as part of my Full-Stack Web Development certification. The project is a complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients. I built the frontend with a modern, responsive design ensuring accessibility across devices. The backend was structured to manage company information dynamically, while also allowing easy updates to services and project details."
            technologies={[
              "React",
              "Javascript",
              "Tailwindcss",
              "framer-motion",
            ]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757114768/Archbuild____Architectural_Website_-_Google_Chrome_2024-10-23_15-25-00_hz6gq6.mp4"
            link="https://archbuild.vercel.app/"
          />
        </Reveal>

        <Reveal>
          <ProjectCard
            title="Archbuild API (Companion Backend Project)"
            description="This was my final full-stack project, officially approved as part of my Full-Stack Web Development certification. The project is a complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients. I built the frontend with a modern, responsive design ensuring accessibility across devices. The backend was structured to manage company information dynamically, while also allowing easy updates to services and project details."
            technologies={["Javascript", "Node.js"]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757174605/archbuild-api.vercel.app_-_Google_Chrome_2025-09-06_17-01-01_aim8lt.mp4"
            link="https://archbuild-api.vercel.app/api/projectList"
          />
        </Reveal>
      </div>
    </main>
  );
}

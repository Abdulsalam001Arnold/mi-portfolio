import Reveal from "@/components/Reveal";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: 'Flexing Projects :)',
  description: 'My Prjects and contributions'
}

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
    ssr: true,
})

const BackgroundAnimation = dynamic(() => import("@/components/background"), { ssr: true});
export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black/70 pt-[4rem] pb-[1.5rem]">
      <BackgroundAnimation />
      <h1 className="text-6xl dancing-script-topic text-white links">
        Projects
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
            poster={"/Notepad.png"}
            role={'Full-stack Developer'}
            githubLink={'https://github.com/Abdulsalam001Arnold/Note-pad'}
            owned={[
                "Frontend: React, Next.js, Tailwindcss, GSAP, Zustand",
                "Backend: Node.js, Express, Mongoose (ODM), MongoDB",
                "Deployment: Vercel, Clerk",
            ]}
            impact={['A simple, intuitive notepad app for jotting down ideas, notes, and sketches on the go.', 'Easy to use and customize with a variety of themes.', 'Cloud sync and archive for privacy.']}
            tagline={'A simple, intuitive notepad app for jotting down ideas, notes, and sketches on the go.'}
          />
        </Reveal>


        <Reveal>
          <ProjectCard
            title="De-gemini "
            poster={"/De-gemini.png"}
            description="A fully operational cleaning services platform serving thousands of active users."
            technologies={[
              "Git",
              "React.js",
              "Typescript",
              "Axios",
              "Mongo DB",
              "Tailwindcss",
              "GSAP",
              "Stripe",
              "Zustand",
              "Framer-motion",
            ]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1763141733/de-gemini_a0ewkx.mp4"
            link="https://degeminiservices.co.uk"
            githubLink={'https://github.com/de-gemini/v1-UI'}
            tagline={'A fully operational cleaning services platform serving thousands of active users in the UK.'}
            role={'Frontend Developer'}
            impact={['A fully operational cleaning services platform serving thousands of active users in the UK.', 'Making life easier for customers by providing a seamless online experience. ', 'Helping to grow the business by increasing revenue and customer satisfaction.']}
            owned={[
                "Frontend: React, Tailwindcss, GSAP, Zustand",
                "API Integration: Axios, Stripe",
                "Deployment: Vercel",
            ]}
          />
        </Reveal>


        <Reveal>
          <ProjectCard
            title="FOTO-C APP"
            poster={"/foto-c.png"}
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
            role={'Frontend Developer'}
            impact={['A collaborative photography platform for photographers, editors, and users.', 'Breaching the gap between professional photographers and the general public by connecting them with creative talent.', 'Helping to grow the business by increasing revenue.']}
            owned={[
                "Frontend: React, Tailwindcss, GSAP, Zustand",
                "API Integration",
                "Deployment: Vercel",
            ]}
            githubLink={''}
            tagline={'A collaborative photography platform for photographers, editors, and users.'}
          />
        </Reveal>

        <Reveal>
          <ProjectCard
            title="Archbuild"
            poster={"/Archbuild.png"}
            description="This was my final full-stack project, officially approved as part of my Full-Stack Web Development certification. The project is a complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients. I built the frontend with a modern, responsive design ensuring accessibility across devices. The backend was structured to manage company information dynamically, while also allowing easy updates to services and project details."
            technologies={[
              "React",
              "Javascript",
              "Tailwindcss",
              "framer-motion",
            ]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757114768/Archbuild____Architectural_Website_-_Google_Chrome_2024-10-23_15-25-00_hz6gq6.mp4"
            link="https://archbuild.vercel.app/"
            githubLink={'https://github.com/Abdulsalam001Arnold/Archbuild'}
            owned={[
                "Frontend: React, Tailwindcss, framer-motion",
                "Backend: Node.js, Express, Mongoose (ODM), MongoDB",
                "Deployment: Vercel",
                "API Integration: Node.js, Express, Mongoose (ODM), MongoDB",
            ]}
            tagline={'A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.'}
            role={'Frontend Developer'}
            impact={['A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.', 'A modern, responsive design ensuring accessibility across devices.', 'A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.']}
          />
        </Reveal>

        <Reveal>
          <ProjectCard
            title="Archbuild API (Companion Backend Project)"
            poster={"/Archbuild.png"}
            description="This was my final full-stack project, officially approved as part of my Full-Stack Web Development certification. The project is a complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients. I built the frontend with a modern, responsive design ensuring accessibility across devices. The backend was structured to manage company information dynamically, while also allowing easy updates to services and project details."
            technologies={["Javascript", "Node.js"]}
            video="https://res.cloudinary.com/dqpbdik90/video/upload/v1757174605/archbuild-api.vercel.app_-_Google_Chrome_2025-09-06_17-01-01_aim8lt.mp4"
            link="https://archbuild-api.vercel.app/api/projectList"
            githubLink={'https://github.com/Abdulsalam001Arnold/archbuild-api'}
            owned={[
                "Backend: Node.js, Express, Mongoose (ODM), MongoDB",
                "Deployment: Vercel",
                "API Integration: Node.js, Express, Mongoose (ODM), MongoDB",
            ]}
            tagline={'A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.'}
            role={'Backend Developer'}
            impact={['A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.', 'A modern, responsive design ensuring accessibility across devices.', 'A complete example website for an architectural company, designed to present services, showcase past projects, and provide an engaging digital presence for clients.']}
          />
        </Reveal>
      </div>
    </main>
  );
}

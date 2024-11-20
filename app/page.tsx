import dynamic from "next/dynamic";
import Skills from "@/components/Skills";
import ProjectsPage from "@/components/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import "./globals.css";
import JourneyTimeline from "@/components/Journey";


export default function Home() {
  return (
    <div className="relative mx-auto md:max-w-[70%] lg:max-w-[80%] px-5 pt-10 h-full">
        <div className="h-full scrollable-content">
          <main>
            <Intro />
            <Skills />
            <JourneyTimeline/>
            <Experience />
            <Education />
            <ProjectsPage />
            <Footer />
          </main>
        </div>
      </div>
  );
}

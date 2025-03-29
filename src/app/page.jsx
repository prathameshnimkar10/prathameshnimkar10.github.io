import Navbar from "../components/navbar";
import HiText from "../components/hiText";
import About from "../components/about";
import Links from "../components/links";
import Skills from "../components/skills";
import Education from "../components/education";
import Projects from "../components/projects";
import Experience from "../components/showExp";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <>
      <Navbar className="fixed top-0 w-full bg-white shadow-md" />
      <main className="pt-32 min-h-screen flex flex-col items-center w-full gap-y-12">
        <HiText />
        <About />
        <Links />
        <Skills />
        <Education className = "mb-8"/>
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
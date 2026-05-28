import Navbar from "../components/navbar";
import HiText from "../components/hiText";
import About from "../components/about";
// import Links from "../components/links";
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
        <div id="home" className="scroll-section">
          <HiText />
        </div>
        <div id="about" className="scroll-section">
          <About />
        </div>
        {/* <Links /> */}
        <Skills />
        <Education className = "mb-8"/>
        <div id="projects" className="scroll-section">
          <Projects />
        </div>
        <div id="experience" className="scroll-section">
          <Experience />
        </div>
        <Footer />
      </main>
    </>
  );
}
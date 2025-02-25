import Navbar from "../components/navbar";
import HiText from "../components/hiText";
import About from "../components/about";

export default function MainPage() {
  return (
    <>
      <Navbar className="fixed top-0 w-full bg-white shadow-md" />
      <main className="pt-32 min-h-screen flex flex-col items-center w-full">
        <HiText />
        <About />
      </main>
    </>
  );
}
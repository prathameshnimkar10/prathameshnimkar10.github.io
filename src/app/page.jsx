import Navbar from "../components/navbar";
import HiText from "../components/hiText";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center">
        <HiText />
      </main>
    </>
  );
}
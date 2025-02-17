import Navbar from '../components/navbar';
export default function MainPage() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center bg-blue-300">
        <h1 className="text-3xl font-bold text-white">Welcome to My Portfolio!</h1>
      </main>
    </>
  );
}
import HomeComponent from "./components/Home";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-col items-center justify-items-center p-8 sm:p-20">
        <main className="flex flex-col items-center sm:items-start">
          <HomeComponent />
        </main>
      </div>
    </>
  );
}
